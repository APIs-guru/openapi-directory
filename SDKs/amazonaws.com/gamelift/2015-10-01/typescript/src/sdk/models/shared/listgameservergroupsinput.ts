import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListGameServerGroupsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
