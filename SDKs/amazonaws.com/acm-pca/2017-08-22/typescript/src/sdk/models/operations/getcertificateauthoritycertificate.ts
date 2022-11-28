import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCertificateAuthorityCertificateXAmzTargetEnum {
    AcmPrivateCaGetCertificateAuthorityCertificate = "ACMPrivateCA.GetCertificateAuthorityCertificate"
}


export class GetCertificateAuthorityCertificateHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetCertificateAuthorityCertificateXAmzTargetEnum;
}


export class GetCertificateAuthorityCertificateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetCertificateAuthorityCertificateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetCertificateAuthorityCertificateRequest;
}


export class GetCertificateAuthorityCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCertificateAuthorityCertificateResponse?: shared.GetCertificateAuthorityCertificateResponse;

  @SpeakeasyMetadata()
  invalidArnException?: any;

  @SpeakeasyMetadata()
  invalidStateException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
