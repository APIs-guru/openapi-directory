import { SpeakeasyBase } from "../../../internal/utils";
import { SubjectAlternativeNames } from "./subjectalternativenames";
import { TlsValidationContextTrust } from "./tlsvalidationcontexttrust";
/**
 * An object that represents how the proxy will validate its peer during Transport Layer Security (TLS) negotiation.
**/
export declare class TlsValidationContext extends SpeakeasyBase {
    subjectAlternativeNames?: SubjectAlternativeNames;
    trust: TlsValidationContextTrust;
}
