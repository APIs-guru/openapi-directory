import { SpeakeasyBase } from "../../../internal/utils";
import { TlsPolicyEnum } from "./tlspolicyenum";
/**
 * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
**/
export declare class DeliveryOptions extends SpeakeasyBase {
    tlsPolicy?: TlsPolicyEnum;
}
