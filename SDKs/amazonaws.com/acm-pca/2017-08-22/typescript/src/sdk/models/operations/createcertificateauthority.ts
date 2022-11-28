import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateCertificateAuthorityXAmzTargetEnum {
    AcmPrivateCaCreateCertificateAuthority = "ACMPrivateCA.CreateCertificateAuthority"
}


export class CreateCertificateAuthorityHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateCertificateAuthorityXAmzTargetEnum;
}


export class CreateCertificateAuthorityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateCertificateAuthorityHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateCertificateAuthorityRequest;
}


export class CreateCertificateAuthorityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createCertificateAuthorityResponse?: shared.CreateCertificateAuthorityResponse;

  @SpeakeasyMetadata()
  invalidArgsException?: any;

  @SpeakeasyMetadata()
  invalidPolicyException?: any;

  @SpeakeasyMetadata()
  invalidTagException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
