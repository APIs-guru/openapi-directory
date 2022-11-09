import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CertificateSummary
/** 
 * This structure is returned in the response object of <a>ListCertificates</a> action. 
**/
export class CertificateSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;
}
