import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCertificateAuthorityCsrXAmzTargetEnum {
    AcmPrivateCaGetCertificateAuthorityCsr = "ACMPrivateCA.GetCertificateAuthorityCsr"
}


export class GetCertificateAuthorityCsrHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetCertificateAuthorityCsrXAmzTargetEnum;
}


export class GetCertificateAuthorityCsrRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetCertificateAuthorityCsrHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetCertificateAuthorityCsrRequest;
}


export class GetCertificateAuthorityCsrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCertificateAuthorityCsrResponse?: shared.GetCertificateAuthorityCsrResponse;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  requestFailedException?: any;

  @Metadata()
  requestInProgressException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
