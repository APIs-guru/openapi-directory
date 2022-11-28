import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerCertificate } from "./servercertificate";



// GetServerCertificateResponse
/** 
 * Contains the response to a successful <a>GetServerCertificate</a> request. 
**/
export class GetServerCertificateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverCertificate: ServerCertificate;
}
