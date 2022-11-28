import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CertificateSummary
/** 
 * This structure is returned in the response object of <a>ListCertificates</a> action. 
**/
export class CertificateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;
}
