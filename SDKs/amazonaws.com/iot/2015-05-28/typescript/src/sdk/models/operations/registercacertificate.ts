import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RegisterCaCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=allowAutoRegistration" })
  allowAutoRegistration?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=setAsActive" })
  setAsActive?: boolean;
}


export class RegisterCaCertificateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// RegisterCaCertificateRequestBodyRegistrationConfig
/** 
 * The registration configuration.
**/
export class RegisterCaCertificateRequestBodyRegistrationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=templateBody" })
  templateBody?: string;
}


export class RegisterCaCertificateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=caCertificate" })
  caCertificate: string;

  @Metadata({ data: "json, name=registrationConfig" })
  registrationConfig?: RegisterCaCertificateRequestBodyRegistrationConfig;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=verificationCertificate" })
  verificationCertificate: string;
}


export class RegisterCaCertificateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RegisterCaCertificateQueryParams;

  @Metadata()
  headers: RegisterCaCertificateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RegisterCaCertificateRequestBody;
}


export class RegisterCaCertificateResponse extends SpeakeasyBase {
  @Metadata()
  certificateValidationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  registerCaCertificateResponse?: shared.RegisterCaCertificateResponse;

  @Metadata()
  registrationCodeValidationException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;
}
