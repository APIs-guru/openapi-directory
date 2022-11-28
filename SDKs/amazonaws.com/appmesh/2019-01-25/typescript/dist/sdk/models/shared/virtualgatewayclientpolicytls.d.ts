import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualGatewayClientTlsCertificate } from "./virtualgatewayclienttlscertificate";
import { VirtualGatewayTlsValidationContext } from "./virtualgatewaytlsvalidationcontext";
/**
 * An object that represents a Transport Layer Security (TLS) client policy.
**/
export declare class VirtualGatewayClientPolicyTls extends SpeakeasyBase {
    certificate?: VirtualGatewayClientTlsCertificate;
    enforce?: boolean;
    ports?: number[];
    validation: VirtualGatewayTlsValidationContext;
}
