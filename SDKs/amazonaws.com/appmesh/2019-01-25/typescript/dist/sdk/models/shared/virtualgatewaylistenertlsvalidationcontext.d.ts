import { SpeakeasyBase } from "../../../internal/utils";
import { SubjectAlternativeNames } from "./subjectalternativenames";
import { VirtualGatewayListenerTlsValidationContextTrust } from "./virtualgatewaylistenertlsvalidationcontexttrust";
/**
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.
**/
export declare class VirtualGatewayListenerTlsValidationContext extends SpeakeasyBase {
    subjectAlternativeNames?: SubjectAlternativeNames;
    trust: VirtualGatewayListenerTlsValidationContextTrust;
}
