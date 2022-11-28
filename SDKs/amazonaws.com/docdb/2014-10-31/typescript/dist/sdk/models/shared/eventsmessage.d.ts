import { SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
/**
 * Represents the output of <a>DescribeEvents</a>.
**/
export declare class EventsMessage extends SpeakeasyBase {
    events?: Event[];
    marker?: string;
}
