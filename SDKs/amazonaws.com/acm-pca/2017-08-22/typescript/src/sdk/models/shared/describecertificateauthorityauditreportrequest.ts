import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCertificateAuthorityAuditReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuditReportId" })
  auditReportId: string;

  @SpeakeasyMetadata({ data: "json, name=CertificateAuthorityArn" })
  certificateAuthorityArn: string;
}
