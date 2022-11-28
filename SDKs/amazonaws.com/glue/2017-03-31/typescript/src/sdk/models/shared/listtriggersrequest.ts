import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTriggersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DependentJobName" })
  dependentJobName?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
