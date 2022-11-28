import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">Status Code Definitions</a>.
**/
export declare class StatusCodes extends SpeakeasyBase {
    status2xx?: number;
    status3xx?: number;
    status4xx?: number;
    status5xx?: number;
}
