import { SpeakeasyBase } from "../../../internal/utils";
import { Cipher } from "./cipher";
/**
 * Information about a policy used for SSL negotiation.
**/
export declare class SslPolicy extends SpeakeasyBase {
    ciphers?: Cipher[];
    name?: string;
    sslProtocols?: string[];
}
