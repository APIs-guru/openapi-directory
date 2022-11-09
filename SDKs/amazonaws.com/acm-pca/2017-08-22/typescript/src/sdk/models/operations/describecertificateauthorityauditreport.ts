import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeCertificateAuthorityAuditReportXAmzTargetEnum {
    AcmPrivateCaDescribeCertificateAuthorityAuditReport = "ACMPrivateCA.DescribeCertificateAuthorityAuditReport"
}


export class DescribeCertificateAuthorityAuditReportHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeCertificateAuthorityAuditReportXAmzTargetEnum;
}


export class DescribeCertificateAuthorityAuditReportRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeCertificateAuthorityAuditReportHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeCertificateAuthorityAuditReportRequest;
}


export class DescribeCertificateAuthorityAuditReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeCertificateAuthorityAuditReportResponse?: shared.DescribeCertificateAuthorityAuditReportResponse;

  @Metadata()
  invalidArgsException?: any;

  @Metadata()
  invalidArnException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
