import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SortOrderEnum } from "./sortorderenum";
import { TaskDefinitionStatusEnum } from "./taskdefinitionstatusenum";



export class ListTaskDefinitionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=familyPrefix" })
  familyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: SortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TaskDefinitionStatusEnum;
}
