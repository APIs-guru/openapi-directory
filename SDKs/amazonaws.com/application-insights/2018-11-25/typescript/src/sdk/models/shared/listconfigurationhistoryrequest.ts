import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationEventStatusEnum } from "./configurationeventstatusenum";


export class ListConfigurationHistoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=EventStatus" })
  eventStatus?: ConfigurationEventStatusEnum;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
