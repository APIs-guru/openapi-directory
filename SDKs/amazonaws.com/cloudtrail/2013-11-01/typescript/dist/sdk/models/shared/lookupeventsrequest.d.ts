import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EventCategoryEnum } from "./eventcategoryenum";
import { LookupAttribute } from "./lookupattribute";
/**
 * Contains a request for LookupEvents.
**/
export declare class LookupEventsRequest extends SpeakeasyBase {
    endTime?: Date;
    eventCategory?: EventCategoryEnum;
    lookupAttributes?: LookupAttribute[];
    maxResults?: number;
    nextToken?: string;
    startTime?: Date;
}
