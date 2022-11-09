import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListenerTlsAcmCertificate } from "./listenertlsacmcertificate";
import { ListenerTlsFileCertificate } from "./listenertlsfilecertificate";
import { ListenerTlsSdsCertificate } from "./listenertlssdscertificate";


// ListenerTlsCertificate
/** 
 * An object that represents a listener's Transport Layer Security (TLS) certificate.
**/
export class ListenerTlsCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=acm" })
  acm?: ListenerTlsAcmCertificate;

  @Metadata({ data: "json, name=file" })
  file?: ListenerTlsFileCertificate;

  @Metadata({ data: "json, name=sds" })
  sds?: ListenerTlsSdsCertificate;
}
