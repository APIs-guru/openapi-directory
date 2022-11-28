import { SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class DescribeFleetEventsOutput extends SpeakeasyBase {
    events?: Event[];
    nextToken?: string;
}
