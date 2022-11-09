import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualGatewayListenerTlsCertificate } from "./virtualgatewaylistenertlscertificate";
import { VirtualGatewayListenerTlsModeEnum } from "./virtualgatewaylistenertlsmodeenum";
import { VirtualGatewayListenerTlsValidationContext } from "./virtualgatewaylistenertlsvalidationcontext";


// VirtualGatewayListenerTls
/** 
 * An object that represents the Transport Layer Security (TLS) properties for a listener.
**/
export class VirtualGatewayListenerTls extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate: VirtualGatewayListenerTlsCertificate;

  @Metadata({ data: "json, name=mode" })
  mode: VirtualGatewayListenerTlsModeEnum;

  @Metadata({ data: "json, name=validation" })
  validation?: VirtualGatewayListenerTlsValidationContext;
}
