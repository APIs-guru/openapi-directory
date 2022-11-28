import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayListenerTlsCertificate } from "./virtualgatewaylistenertlscertificate";
import { VirtualGatewayListenerTlsModeEnum } from "./virtualgatewaylistenertlsmodeenum";
import { VirtualGatewayListenerTlsValidationContext } from "./virtualgatewaylistenertlsvalidationcontext";



// VirtualGatewayListenerTls
/** 
 * An object that represents the Transport Layer Security (TLS) properties for a listener.
**/
export class VirtualGatewayListenerTls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate: VirtualGatewayListenerTlsCertificate;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode: VirtualGatewayListenerTlsModeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: VirtualGatewayListenerTlsValidationContext;
}
