import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualGatewayListenerTlsAcmCertificate } from "./virtualgatewaylistenertlsacmcertificate";
import { VirtualGatewayListenerTlsFileCertificate } from "./virtualgatewaylistenertlsfilecertificate";
import { VirtualGatewayListenerTlsSdsCertificate } from "./virtualgatewaylistenertlssdscertificate";


// VirtualGatewayListenerTlsCertificate
/** 
 * An object that represents a listener's Transport Layer Security (TLS) certificate.
**/
export class VirtualGatewayListenerTlsCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=acm" })
  acm?: VirtualGatewayListenerTlsAcmCertificate;

  @Metadata({ data: "json, name=file" })
  file?: VirtualGatewayListenerTlsFileCertificate;

  @Metadata({ data: "json, name=sds" })
  sds?: VirtualGatewayListenerTlsSdsCertificate;
}
