import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWorkflowRunsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IncludeGraph" })
  includeGraph?: boolean;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
