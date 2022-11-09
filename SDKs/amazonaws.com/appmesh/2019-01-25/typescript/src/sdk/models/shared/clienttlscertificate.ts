import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListenerTlsFileCertificate } from "./listenertlsfilecertificate";
import { ListenerTlsSdsCertificate } from "./listenertlssdscertificate";


// ClientTlsCertificate
/** 
 * An object that represents the client's certificate.
**/
export class ClientTlsCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=file" })
  file?: ListenerTlsFileCertificate;

  @Metadata({ data: "json, name=sds" })
  sds?: ListenerTlsSdsCertificate;
}
