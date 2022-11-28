import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayTlsValidationContextFileTrust } from "./virtualgatewaytlsvalidationcontextfiletrust";
import { VirtualGatewayTlsValidationContextSdsTrust } from "./virtualgatewaytlsvalidationcontextsdstrust";
/**
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context trust.
**/
export declare class VirtualGatewayListenerTlsValidationContextTrust extends SpeakeasyBase {
    file?: VirtualGatewayTlsValidationContextFileTrust;
    sds?: VirtualGatewayTlsValidationContextSdsTrust;
}
