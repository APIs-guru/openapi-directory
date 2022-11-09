import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuditReportResponseFormatEnum } from "./auditreportresponseformatenum";


export class CreateCertificateAuthorityAuditReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuditReportResponseFormat" })
  auditReportResponseFormat: AuditReportResponseFormatEnum;

  @Metadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @Metadata({ data: "json, name=S3BucketName" })
  s3BucketName: string;
}
