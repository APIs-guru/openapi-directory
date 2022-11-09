import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTriggersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DependentJobName" })
  dependentJobName?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
