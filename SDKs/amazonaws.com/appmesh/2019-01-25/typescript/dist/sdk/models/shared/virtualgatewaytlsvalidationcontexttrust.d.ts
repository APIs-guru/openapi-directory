import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayTlsValidationContextAcmTrust } from "./virtualgatewaytlsvalidationcontextacmtrust";
import { VirtualGatewayTlsValidationContextFileTrust } from "./virtualgatewaytlsvalidationcontextfiletrust";
import { VirtualGatewayTlsValidationContextSdsTrust } from "./virtualgatewaytlsvalidationcontextsdstrust";
/**
 * An object that represents a Transport Layer Security (TLS) validation context trust.
**/
export declare class VirtualGatewayTlsValidationContextTrust extends SpeakeasyBase {
    acm?: VirtualGatewayTlsValidationContextAcmTrust;
    file?: VirtualGatewayTlsValidationContextFileTrust;
    sds?: VirtualGatewayTlsValidationContextSdsTrust;
}
