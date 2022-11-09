import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceTypeEnum } from "./sourcetypeenum";


export class DescribeEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Duration" })
  duration?: number;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SourceName" })
  sourceName?: string;

  @Metadata({ data: "json, name=SourceType" })
  sourceType?: SourceTypeEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
