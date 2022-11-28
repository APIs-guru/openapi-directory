import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditReportStatusEnum } from "./auditreportstatusenum";



export class DescribeCertificateAuthorityAuditReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuditReportStatus" })
  auditReportStatus?: AuditReportStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=S3BucketName" })
  s3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Key" })
  s3Key?: string;
}
