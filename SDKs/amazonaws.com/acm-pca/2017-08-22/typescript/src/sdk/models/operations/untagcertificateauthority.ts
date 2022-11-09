import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UntagCertificateAuthorityXAmzTargetEnum {
    AcmPrivateCaUntagCertificateAuthority = "ACMPrivateCA.UntagCertificateAuthority"
}


export class UntagCertificateAuthorityHeaders extends SpeakeasyBase {
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
  xAmzTarget: UntagCertificateAuthorityXAmzTargetEnum;
}


export class UntagCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata()
  headers: UntagCertificateAuthorityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UntagCertificateAuthorityRequest;
}


export class UntagCertificateAuthorityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  invalidTagException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
