import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SigningCertificate } from "./signingcertificate";



// ListSigningCertificatesResponse
/** 
 * Contains the response to a successful <a>ListSigningCertificates</a> request. 
**/
export class ListSigningCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: SigningCertificate })
  certificates: SigningCertificate[];

  @SpeakeasyMetadata()
  isTruncated?: boolean;

  @SpeakeasyMetadata()
  marker?: string;
}
