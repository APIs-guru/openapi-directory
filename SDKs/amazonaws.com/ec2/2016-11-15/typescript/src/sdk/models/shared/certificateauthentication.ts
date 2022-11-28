import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CertificateAuthentication
/** 
 * Information about the client certificate used for authentication.
**/
export class CertificateAuthentication extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientRootCertificateChain?: string;
}
