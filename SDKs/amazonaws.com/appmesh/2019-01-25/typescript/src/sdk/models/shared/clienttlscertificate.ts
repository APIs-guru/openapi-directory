import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListenerTlsFileCertificate } from "./listenertlsfilecertificate";
import { ListenerTlsSdsCertificate } from "./listenertlssdscertificate";



// ClientTlsCertificate
/** 
 * An object that represents the client's certificate.
**/
export class ClientTlsCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: ListenerTlsFileCertificate;

  @SpeakeasyMetadata({ data: "json, name=sds" })
  sds?: ListenerTlsSdsCertificate;
}
