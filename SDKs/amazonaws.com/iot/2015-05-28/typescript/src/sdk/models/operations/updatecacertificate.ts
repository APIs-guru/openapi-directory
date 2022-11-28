import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateCaCertificatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=caCertificateId" })
  caCertificateId: string;
}

export enum UpdateCaCertificateNewAutoRegistrationStatusEnum {
    Enable = "ENABLE",
    Disable = "DISABLE"
}

export enum UpdateCaCertificateNewStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}


export class UpdateCaCertificateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newAutoRegistrationStatus" })
  newAutoRegistrationStatus?: UpdateCaCertificateNewAutoRegistrationStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newStatus" })
  newStatus?: UpdateCaCertificateNewStatusEnum;
}


export class UpdateCaCertificateHeaders extends SpeakeasyBase {
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


// UpdateCaCertificateRequestBodyRegistrationConfig
/** 
 * The registration configuration.
**/
export class UpdateCaCertificateRequestBodyRegistrationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=templateBody" })
  templateBody?: string;
}


export class UpdateCaCertificateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registrationConfig" })
  registrationConfig?: UpdateCaCertificateRequestBodyRegistrationConfig;

  @SpeakeasyMetadata({ data: "json, name=removeAutoRegistration" })
  removeAutoRegistration?: boolean;
}


export class UpdateCaCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateCaCertificatePathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateCaCertificateQueryParams;

  @SpeakeasyMetadata()
  headers: UpdateCaCertificateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateCaCertificateRequestBody;
}


export class UpdateCaCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
