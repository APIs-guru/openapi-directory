import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateCaCertificatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=caCertificateId" })
  caCertificateId: string;
}

export enum UpdateCaCertificateNewAutoRegistrationStatusEnum {
    Enable = "ENABLE"
,    Disable = "DISABLE"
}

export enum UpdateCaCertificateNewStatusEnum {
    Active = "ACTIVE"
,    Inactive = "INACTIVE"
}


export class UpdateCaCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=newAutoRegistrationStatus" })
  newAutoRegistrationStatus?: UpdateCaCertificateNewAutoRegistrationStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=newStatus" })
  newStatus?: UpdateCaCertificateNewStatusEnum;
}


export class UpdateCaCertificateHeaders extends SpeakeasyBase {
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


// UpdateCaCertificateRequestBodyRegistrationConfig
/** 
 * The registration configuration.
**/
export class UpdateCaCertificateRequestBodyRegistrationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=templateBody" })
  templateBody?: string;
}


export class UpdateCaCertificateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=registrationConfig" })
  registrationConfig?: UpdateCaCertificateRequestBodyRegistrationConfig;

  @Metadata({ data: "json, name=removeAutoRegistration" })
  removeAutoRegistration?: boolean;
}


export class UpdateCaCertificateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCaCertificatePathParams;

  @Metadata()
  queryParams: UpdateCaCertificateQueryParams;

  @Metadata()
  headers: UpdateCaCertificateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateCaCertificateRequestBody;
}


export class UpdateCaCertificateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  unauthorizedException?: any;
}
