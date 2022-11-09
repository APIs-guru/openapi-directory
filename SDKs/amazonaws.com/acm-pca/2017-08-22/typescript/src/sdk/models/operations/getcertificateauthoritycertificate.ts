import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCertificateAuthorityCertificateXAmzTargetEnum {
    AcmPrivateCaGetCertificateAuthorityCertificate = "ACMPrivateCA.GetCertificateAuthorityCertificate"
}


export class GetCertificateAuthorityCertificateHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetCertificateAuthorityCertificateXAmzTargetEnum;
}


export class GetCertificateAuthorityCertificateRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetCertificateAuthorityCertificateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetCertificateAuthorityCertificateRequest;
}


export class GetCertificateAuthorityCertificateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCertificateAuthorityCertificateResponse?: shared.GetCertificateAuthorityCertificateResponse;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  invalidStateException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
