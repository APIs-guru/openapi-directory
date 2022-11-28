import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateDescription } from "./certificatedescription";



// DescribeCertificateResponse
/** 
 * The output of the DescribeCertificate operation.
**/
export class DescribeCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateDescription" })
  certificateDescription?: CertificateDescription;
}
