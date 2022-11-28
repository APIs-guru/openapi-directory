import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditReportResponseFormatEnum } from "./auditreportresponseformatenum";



export class CreateCertificateAuthorityAuditReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuditReportResponseFormat" })
  auditReportResponseFormat: AuditReportResponseFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;

  @SpeakeasyMetadata({ data: "json, name=S3BucketName" })
  s3BucketName: string;
}
