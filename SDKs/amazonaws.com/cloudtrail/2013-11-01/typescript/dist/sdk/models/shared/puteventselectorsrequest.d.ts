import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AdvancedEventSelector } from "./advancedeventselector";
import { EventSelector } from "./eventselector";
export declare class PutEventSelectorsRequest extends SpeakeasyBase {
    advancedEventSelectors?: AdvancedEventSelector[];
    eventSelectors?: EventSelector[];
    trailName: string;
}
