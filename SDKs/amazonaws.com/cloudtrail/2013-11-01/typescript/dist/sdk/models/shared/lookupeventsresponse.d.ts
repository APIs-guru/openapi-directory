import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Event } from "./event";
/**
 * Contains a response to a LookupEvents action.
**/
export declare class LookupEventsResponse extends SpeakeasyBase {
    events?: Event[];
    nextToken?: string;
}
