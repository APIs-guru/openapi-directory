import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeCertificateAuthorityXAmzTargetEnum {
    AcmPrivateCaDescribeCertificateAuthority = "ACMPrivateCA.DescribeCertificateAuthority"
}


export class DescribeCertificateAuthorityHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeCertificateAuthorityXAmzTargetEnum;
}


export class DescribeCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeCertificateAuthorityHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeCertificateAuthorityRequest;
}


export class DescribeCertificateAuthorityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeCertificateAuthorityResponse?: shared.DescribeCertificateAuthorityResponse;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
