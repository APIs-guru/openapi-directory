import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventCategoryEnum } from "./eventcategoryenum";
import { LookupAttribute } from "./lookupattribute";


// LookupEventsRequest
/** 
 * Contains a request for LookupEvents.
**/
export class LookupEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=EventCategory" })
  eventCategory?: EventCategoryEnum;

  @Metadata({ data: "json, name=LookupAttributes", elemType: shared.LookupAttribute })
  lookupAttributes?: LookupAttribute[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
