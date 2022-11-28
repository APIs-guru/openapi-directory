import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayListenerTlsFileCertificate } from "./virtualgatewaylistenertlsfilecertificate";
import { VirtualGatewayListenerTlsSdsCertificate } from "./virtualgatewaylistenertlssdscertificate";



// VirtualGatewayClientTlsCertificate
/** 
 * An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.
**/
export class VirtualGatewayClientTlsCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: VirtualGatewayListenerTlsFileCertificate;

  @SpeakeasyMetadata({ data: "json, name=sds" })
  sds?: VirtualGatewayListenerTlsSdsCertificate;
}
