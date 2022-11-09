import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AdvancedEventSelector } from "./advancedeventselector";
import { EventSelector } from "./eventselector";
export declare class GetEventSelectorsResponse extends SpeakeasyBase {
    advancedEventSelectors?: AdvancedEventSelector[];
    eventSelectors?: EventSelector[];
    trailArn?: string;
}
