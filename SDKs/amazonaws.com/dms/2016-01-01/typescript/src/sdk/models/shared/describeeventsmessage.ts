import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";
import { SourceTypeEnum } from "./sourcetypeenum";


// DescribeEventsMessage
/** 
 * <p/>
**/
export class DescribeEventsMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Duration" })
  duration?: number;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=EventCategories" })
  eventCategories?: string[];

  @Metadata({ data: "json, name=Filters", elemType: shared.Filter })
  filters?: Filter[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "json, name=SourceIdentifier" })
  sourceIdentifier?: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: SourceTypeEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
