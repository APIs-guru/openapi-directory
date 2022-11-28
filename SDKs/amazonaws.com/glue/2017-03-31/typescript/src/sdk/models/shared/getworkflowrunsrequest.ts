import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWorkflowRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IncludeGraph" })
  includeGraph?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
