import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateDescription } from "./certificatedescription";


// DescribeCertificateResponse
/** 
 * The output of the DescribeCertificate operation.
**/
export class DescribeCertificateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateDescription" })
  certificateDescription?: CertificateDescription;
}
