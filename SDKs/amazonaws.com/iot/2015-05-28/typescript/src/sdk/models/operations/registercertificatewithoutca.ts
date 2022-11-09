import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RegisterCertificateWithoutCaHeaders extends SpeakeasyBase {
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

export enum RegisterCertificateWithoutCaRequestBodyStatusEnum {
    Active = "ACTIVE"
,    Inactive = "INACTIVE"
,    Revoked = "REVOKED"
,    PendingTransfer = "PENDING_TRANSFER"
,    RegisterInactive = "REGISTER_INACTIVE"
,    PendingActivation = "PENDING_ACTIVATION"
}


export class RegisterCertificateWithoutCaRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificatePem" })
  certificatePem: string;

  @Metadata({ data: "json, name=status" })
  status?: RegisterCertificateWithoutCaRequestBodyStatusEnum;
}


export class RegisterCertificateWithoutCaRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterCertificateWithoutCaHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: RegisterCertificateWithoutCaRequestBody;
}


export class RegisterCertificateWithoutCaResponse extends SpeakeasyBase {
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
  registerCertificateWithoutCaResponse?: shared.RegisterCertificateWithoutCaResponse;

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
