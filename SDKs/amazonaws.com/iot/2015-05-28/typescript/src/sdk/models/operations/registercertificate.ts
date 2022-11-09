import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RegisterCertificateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=setAsActive" })
  setAsActive?: boolean;
}


export class RegisterCertificateHeaders extends SpeakeasyBase {
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

export enum RegisterCertificateRequestBodyStatusEnum {
    Active = "ACTIVE"
,    Inactive = "INACTIVE"
,    Revoked = "REVOKED"
,    PendingTransfer = "PENDING_TRANSFER"
,    RegisterInactive = "REGISTER_INACTIVE"
,    PendingActivation = "PENDING_ACTIVATION"
}


export class RegisterCertificateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=caCertificatePem" })
  caCertificatePem?: string;

  @Metadata({ data: "json, name=certificatePem" })
  certificatePem: string;

  @Metadata({ data: "json, name=status" })
  status?: RegisterCertificateRequestBodyStatusEnum;
}


export class RegisterCertificateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RegisterCertificateQueryParams;

  @Metadata()
  headers: RegisterCertificateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RegisterCertificateRequestBody;
}


export class RegisterCertificateResponse extends SpeakeasyBase {
  @Metadata()
  certificateConflictException?: any;

  @Metadata()
  certificateStateException?: any;

  @Metadata()
  certificateValidationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  registerCertificateResponse?: shared.RegisterCertificateResponse;

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
