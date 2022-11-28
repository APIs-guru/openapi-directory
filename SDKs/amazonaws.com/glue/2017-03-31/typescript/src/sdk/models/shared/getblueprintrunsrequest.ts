import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBlueprintRunsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlueprintName" })
  blueprintName: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
