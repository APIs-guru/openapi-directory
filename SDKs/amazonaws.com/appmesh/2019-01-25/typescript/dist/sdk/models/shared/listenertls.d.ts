import { SpeakeasyBase } from "../../../internal/utils";
import { ListenerTlsCertificate } from "./listenertlscertificate";
import { ListenerTlsModeEnum } from "./listenertlsmodeenum";
import { ListenerTlsValidationContext } from "./listenertlsvalidationcontext";
/**
 * An object that represents the Transport Layer Security (TLS) properties for a listener.
**/
export declare class ListenerTls extends SpeakeasyBase {
    certificate: ListenerTlsCertificate;
    mode: ListenerTlsModeEnum;
    validation?: ListenerTlsValidationContext;
}
