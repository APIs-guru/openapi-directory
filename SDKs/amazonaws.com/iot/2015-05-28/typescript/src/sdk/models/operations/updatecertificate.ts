import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateCertificatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=certificateId" })
  certificateId: string;
}

export enum UpdateCertificateNewStatusEnum {
    Active = "ACTIVE"
,    Inactive = "INACTIVE"
,    Revoked = "REVOKED"
,    PendingTransfer = "PENDING_TRANSFER"
,    RegisterInactive = "REGISTER_INACTIVE"
,    PendingActivation = "PENDING_ACTIVATION"
}


export class UpdateCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=newStatus" })
  newStatus: UpdateCertificateNewStatusEnum;
}


export class UpdateCertificateHeaders extends SpeakeasyBase {
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


export class UpdateCertificateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCertificatePathParams;

  @Metadata()
  queryParams: UpdateCertificateQueryParams;

  @Metadata()
  headers: UpdateCertificateHeaders;
}


export class UpdateCertificateResponse extends SpeakeasyBase {
  @Metadata()
  certificateStateException?: any;

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
