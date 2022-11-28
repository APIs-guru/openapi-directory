import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCertificateAuthorityAuditReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuditReportId" })
  auditReportId?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Key" })
  s3Key?: string;
}
