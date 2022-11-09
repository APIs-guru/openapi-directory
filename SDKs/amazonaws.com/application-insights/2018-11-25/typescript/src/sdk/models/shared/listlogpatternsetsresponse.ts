import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListLogPatternSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogPatternSets" })
  logPatternSets?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName?: string;
}
