import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuditReportStatusEnum } from "./auditreportstatusenum";


export class DescribeCertificateAuthorityAuditReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuditReportStatus" })
  auditReportStatus?: AuditReportStatusEnum;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @Metadata({ data: "json, name=S3Key" })
  s3Key?: string;
}
