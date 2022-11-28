import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RegisterCertificateWithoutCaHeaders extends SpeakeasyBase {
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

export enum RegisterCertificateWithoutCaRequestBodyStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Revoked = "REVOKED",
    PendingTransfer = "PENDING_TRANSFER",
    RegisterInactive = "REGISTER_INACTIVE",
    PendingActivation = "PENDING_ACTIVATION"
}


export class RegisterCertificateWithoutCaRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificatePem" })
  certificatePem: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: RegisterCertificateWithoutCaRequestBodyStatusEnum;
}


export class RegisterCertificateWithoutCaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RegisterCertificateWithoutCaHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RegisterCertificateWithoutCaRequestBody;
}


export class RegisterCertificateWithoutCaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificateStateException?: any;

  @SpeakeasyMetadata()
  certificateValidationException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  registerCertificateWithoutCaResponse?: shared.RegisterCertificateWithoutCaResponse;

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
