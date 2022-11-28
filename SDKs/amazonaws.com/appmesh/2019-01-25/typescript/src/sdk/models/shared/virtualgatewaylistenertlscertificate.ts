import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayListenerTlsAcmCertificate } from "./virtualgatewaylistenertlsacmcertificate";
import { VirtualGatewayListenerTlsFileCertificate } from "./virtualgatewaylistenertlsfilecertificate";
import { VirtualGatewayListenerTlsSdsCertificate } from "./virtualgatewaylistenertlssdscertificate";



// VirtualGatewayListenerTlsCertificate
/** 
 * An object that represents a listener's Transport Layer Security (TLS) certificate.
**/
export class VirtualGatewayListenerTlsCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acm" })
  acm?: VirtualGatewayListenerTlsAcmCertificate;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: VirtualGatewayListenerTlsFileCertificate;

  @SpeakeasyMetadata({ data: "json, name=sds" })
  sds?: VirtualGatewayListenerTlsSdsCertificate;
}
