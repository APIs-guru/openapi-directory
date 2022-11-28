import { SpeakeasyBase } from "../../../internal/utils";
import { AuditReportStatusEnum } from "./auditreportstatusenum";
export declare class DescribeCertificateAuthorityAuditReportResponse extends SpeakeasyBase {
    auditReportStatus?: AuditReportStatusEnum;
    createdAt?: Date;
    s3BucketName?: string;
    s3Key?: string;
}
