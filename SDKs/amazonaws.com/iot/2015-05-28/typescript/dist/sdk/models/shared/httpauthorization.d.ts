import { SpeakeasyBase } from "../../../internal/utils";
import { SigV4Authorization } from "./sigv4authorization";
/**
 * The authorization method used to send messages.
**/
export declare class HttpAuthorization extends SpeakeasyBase {
    sigv4?: SigV4Authorization;
}
