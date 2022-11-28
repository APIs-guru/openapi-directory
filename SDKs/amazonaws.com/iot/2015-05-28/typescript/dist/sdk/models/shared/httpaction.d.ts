import { SpeakeasyBase } from "../../../internal/utils";
import { HttpAuthorization } from "./httpauthorization";
import { HttpActionHeader } from "./httpactionheader";
/**
 * Send data to an HTTPS endpoint.
**/
export declare class HttpAction extends SpeakeasyBase {
    auth?: HttpAuthorization;
    confirmationUrl?: string;
    headers?: HttpActionHeader[];
    url: string;
}
