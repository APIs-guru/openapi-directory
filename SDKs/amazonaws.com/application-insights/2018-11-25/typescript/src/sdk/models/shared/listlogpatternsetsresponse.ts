import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListLogPatternSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogPatternSets" })
  logPatternSets?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName?: string;
}
