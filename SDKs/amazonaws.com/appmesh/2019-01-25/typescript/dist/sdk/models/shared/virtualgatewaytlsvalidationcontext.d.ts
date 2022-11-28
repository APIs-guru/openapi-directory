import { SpeakeasyBase } from "../../../internal/utils";
import { SubjectAlternativeNames } from "./subjectalternativenames";
import { VirtualGatewayTlsValidationContextTrust } from "./virtualgatewaytlsvalidationcontexttrust";
/**
 * An object that represents a Transport Layer Security (TLS) validation context.
**/
export declare class VirtualGatewayTlsValidationContext extends SpeakeasyBase {
    subjectAlternativeNames?: SubjectAlternativeNames;
    trust: VirtualGatewayTlsValidationContextTrust;
}
