import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";



export class ListGameServersInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GameServerGroupName" })
  gameServerGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
