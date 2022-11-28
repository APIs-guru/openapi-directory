import { SpeakeasyBase } from "../../../internal/utils";
import { AdvancedEventSelector } from "./advancedeventselector";
import { EventSelector } from "./eventselector";
export declare class PutEventSelectorsResponse extends SpeakeasyBase {
    advancedEventSelectors?: AdvancedEventSelector[];
    eventSelectors?: EventSelector[];
    trailArn?: string;
}
