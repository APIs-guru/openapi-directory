import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListProblemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
