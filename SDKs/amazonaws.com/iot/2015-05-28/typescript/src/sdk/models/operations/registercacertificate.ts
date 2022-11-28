import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RegisterCaCertificateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowAutoRegistration" })
  allowAutoRegistration?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setAsActive" })
  setAsActive?: boolean;
}


export class RegisterCaCertificateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// RegisterCaCertificateRequestBodyRegistrationConfig
/** 
 * The registration configuration.
**/
export class RegisterCaCertificateRequestBodyRegistrationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=templateBody" })
  templateBody?: string;
}


export class RegisterCaCertificateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caCertificate" })
  caCertificate: string;

  @SpeakeasyMetadata({ data: "json, name=registrationConfig" })
  registrationConfig?: RegisterCaCertificateRequestBodyRegistrationConfig;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @SpeakeasyMetadata({ data: "json, name=verificationCertificate" })
  verificationCertificate: string;
}


export class RegisterCaCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RegisterCaCertificateQueryParams;

  @SpeakeasyMetadata()
  headers: RegisterCaCertificateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RegisterCaCertificateRequestBody;
}


export class RegisterCaCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateValidationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  registerCaCertificateResponse?: shared.RegisterCaCertificateResponse;

  @SpeakeasyMetadata()
  registrationCodeValidationException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
