import { SpeakeasyBase } from "../../../internal/utils";
import { EventDescription } from "./eventdescription";
/**
 * Result message wrapping a list of event descriptions.
**/
export declare class EventDescriptionsMessage extends SpeakeasyBase {
    events?: EventDescription[];
    nextToken?: string;
}
