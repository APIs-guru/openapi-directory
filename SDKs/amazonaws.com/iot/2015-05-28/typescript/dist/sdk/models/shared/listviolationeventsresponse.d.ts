import { SpeakeasyBase } from "../../../internal/utils";
import { ViolationEvent } from "./violationevent";
export declare class ListViolationEventsResponse extends SpeakeasyBase {
    nextToken?: string;
    violationEvents?: ViolationEvent[];
}
