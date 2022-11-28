import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SigningCertificate } from "./signingcertificate";



// UploadSigningCertificateResponse
/** 
 * Contains the response to a successful <a>UploadSigningCertificate</a> request. 
**/
export class UploadSigningCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  certificate: SigningCertificate;
}
