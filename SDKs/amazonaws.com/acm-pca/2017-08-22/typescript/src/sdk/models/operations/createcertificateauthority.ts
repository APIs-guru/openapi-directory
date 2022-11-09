import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateCertificateAuthorityXAmzTargetEnum {
    AcmPrivateCaCreateCertificateAuthority = "ACMPrivateCA.CreateCertificateAuthority"
}


export class CreateCertificateAuthorityHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: CreateCertificateAuthorityXAmzTargetEnum;
}


export class CreateCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCertificateAuthorityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateCertificateAuthorityRequest;
}


export class CreateCertificateAuthorityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createCertificateAuthorityResponse?: shared.CreateCertificateAuthorityResponse;

  @Metadata()
  invalidArgsException?: any;

  @Metadata()
  invalidPolicyException?: any;

  @Metadata()
  invalidTagException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
