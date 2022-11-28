import { SpeakeasyBase } from "../../../internal/utils";
import { AuditReportResponseFormatEnum } from "./auditreportresponseformatenum";
export declare class CreateCertificateAuthorityAuditReportRequest extends SpeakeasyBase {
    auditReportResponseFormat: AuditReportResponseFormatEnum;
    certificateAuthorityArn: string;
    s3BucketName: string;
}
