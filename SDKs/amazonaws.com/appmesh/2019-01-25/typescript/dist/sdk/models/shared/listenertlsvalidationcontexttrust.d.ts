import { SpeakeasyBase } from "../../../internal/utils";
import { TlsValidationContextFileTrust } from "./tlsvalidationcontextfiletrust";
import { TlsValidationContextSdsTrust } from "./tlsvalidationcontextsdstrust";
/**
 * An object that represents a listener's Transport Layer Security (TLS) validation context trust.
**/
export declare class ListenerTlsValidationContextTrust extends SpeakeasyBase {
    file?: TlsValidationContextFileTrust;
    sds?: TlsValidationContextSdsTrust;
}
