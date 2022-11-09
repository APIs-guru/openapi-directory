import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBlueprintRunsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlueprintName" })
  blueprintName: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
