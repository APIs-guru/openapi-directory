import { SpeakeasyBase } from "../../../internal/utils";
import { TlsValidationContextAcmTrust } from "./tlsvalidationcontextacmtrust";
import { TlsValidationContextFileTrust } from "./tlsvalidationcontextfiletrust";
import { TlsValidationContextSdsTrust } from "./tlsvalidationcontextsdstrust";
/**
 * An object that represents a Transport Layer Security (TLS) validation context trust.
**/
export declare class TlsValidationContextTrust extends SpeakeasyBase {
    acm?: TlsValidationContextAcmTrust;
    file?: TlsValidationContextFileTrust;
    sds?: TlsValidationContextSdsTrust;
}
