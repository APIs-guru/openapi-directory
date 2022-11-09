import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortOrderEnum } from "./sortorderenum";
import { TaskDefinitionStatusEnum } from "./taskdefinitionstatusenum";


export class ListTaskDefinitionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyPrefix" })
  familyPrefix?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sort" })
  sort?: SortOrderEnum;

  @Metadata({ data: "json, name=status" })
  status?: TaskDefinitionStatusEnum;
}
