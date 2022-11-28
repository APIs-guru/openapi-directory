import { SpeakeasyBase } from "../../../internal/utils";
import { MatchRange } from "./matchrange";
/**
 * An object that represents the method and value to match with the header value sent in a request. Specify one match method.
**/
export declare class HeaderMatchMethod extends SpeakeasyBase {
    exact?: string;
    prefix?: string;
    range?: MatchRange;
    regex?: string;
    suffix?: string;
}
