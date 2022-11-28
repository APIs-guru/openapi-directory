import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
import { SourceTypeEnum } from "./sourcetypeenum";



// DescribeEventsMessage
/** 
 * <p/>
**/
export class DescribeEventsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EventCategories" })
  eventCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=Filters", elemType: Filter })
  filters?: Filter[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "json, name=SourceIdentifier" })
  sourceIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: SourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
