import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualGatewayListenerTlsFileCertificate } from "./virtualgatewaylistenertlsfilecertificate";
import { VirtualGatewayListenerTlsSdsCertificate } from "./virtualgatewaylistenertlssdscertificate";


// VirtualGatewayClientTlsCertificate
/** 
 * An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.
**/
export class VirtualGatewayClientTlsCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=file" })
  file?: VirtualGatewayListenerTlsFileCertificate;

  @Metadata({ data: "json, name=sds" })
  sds?: VirtualGatewayListenerTlsSdsCertificate;
}
