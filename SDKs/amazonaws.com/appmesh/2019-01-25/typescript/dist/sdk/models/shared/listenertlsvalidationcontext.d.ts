import { SpeakeasyBase } from "../../../internal/utils";
import { SubjectAlternativeNames } from "./subjectalternativenames";
import { ListenerTlsValidationContextTrust } from "./listenertlsvalidationcontexttrust";
/**
 * An object that represents a listener's Transport Layer Security (TLS) validation context.
**/
export declare class ListenerTlsValidationContext extends SpeakeasyBase {
    subjectAlternativeNames?: SubjectAlternativeNames;
    trust: ListenerTlsValidationContextTrust;
}
