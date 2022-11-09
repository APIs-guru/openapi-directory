import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Event } from "./event";
export declare class ListEventsResponse extends SpeakeasyBase {
    events: Event[];
    nextToken?: string;
}
