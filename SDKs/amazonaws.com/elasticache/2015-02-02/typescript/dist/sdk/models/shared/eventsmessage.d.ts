import { SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
/**
 * Represents the output of a <code>DescribeEvents</code> operation.
**/
export declare class EventsMessage extends SpeakeasyBase {
    events?: Event[];
    marker?: string;
}
