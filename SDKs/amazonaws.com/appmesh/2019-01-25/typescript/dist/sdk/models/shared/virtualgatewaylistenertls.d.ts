import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayListenerTlsCertificate } from "./virtualgatewaylistenertlscertificate";
import { VirtualGatewayListenerTlsModeEnum } from "./virtualgatewaylistenertlsmodeenum";
import { VirtualGatewayListenerTlsValidationContext } from "./virtualgatewaylistenertlsvalidationcontext";
/**
 * An object that represents the Transport Layer Security (TLS) properties for a listener.
**/
export declare class VirtualGatewayListenerTls extends SpeakeasyBase {
    certificate: VirtualGatewayListenerTlsCertificate;
    mode: VirtualGatewayListenerTlsModeEnum;
    validation?: VirtualGatewayListenerTlsValidationContext;
}
