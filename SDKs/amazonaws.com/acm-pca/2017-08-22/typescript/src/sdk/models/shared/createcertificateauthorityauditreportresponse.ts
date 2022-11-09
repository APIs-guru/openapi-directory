import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCertificateAuthorityAuditReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuditReportId" })
  auditReportId?: string;

  @Metadata({ data: "json, name=S3Key" })
  s3Key?: string;
}
