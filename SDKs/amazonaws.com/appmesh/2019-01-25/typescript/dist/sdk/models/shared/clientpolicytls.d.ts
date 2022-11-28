import { SpeakeasyBase } from "../../../internal/utils";
import { ClientTlsCertificate } from "./clienttlscertificate";
import { TlsValidationContext } from "./tlsvalidationcontext";
/**
 * A reference to an object that represents a Transport Layer Security (TLS) client policy.
**/
export declare class ClientPolicyTls extends SpeakeasyBase {
    certificate?: ClientTlsCertificate;
    enforce?: boolean;
    ports?: number[];
    validation: TlsValidationContext;
}
