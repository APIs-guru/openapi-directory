import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListenerTlsAcmCertificate } from "./listenertlsacmcertificate";
import { ListenerTlsFileCertificate } from "./listenertlsfilecertificate";
import { ListenerTlsSdsCertificate } from "./listenertlssdscertificate";



// ListenerTlsCertificate
/** 
 * An object that represents a listener's Transport Layer Security (TLS) certificate.
**/
export class ListenerTlsCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acm" })
  acm?: ListenerTlsAcmCertificate;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: ListenerTlsFileCertificate;

  @SpeakeasyMetadata({ data: "json, name=sds" })
  sds?: ListenerTlsSdsCertificate;
}
