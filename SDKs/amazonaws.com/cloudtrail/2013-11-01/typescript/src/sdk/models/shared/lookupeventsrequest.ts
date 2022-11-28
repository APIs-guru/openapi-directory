import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventCategoryEnum } from "./eventcategoryenum";
import { LookupAttribute } from "./lookupattribute";



// LookupEventsRequest
/** 
 * Contains a request for LookupEvents.
**/
export class LookupEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EventCategory" })
  eventCategory?: EventCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=LookupAttributes", elemType: LookupAttribute })
  lookupAttributes?: LookupAttribute[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
