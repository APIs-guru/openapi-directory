import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectSortByTypeEnum } from "./projectsortbytypeenum";
import { SortOrderTypeEnum } from "./sortordertypeenum";


export class ListProjectsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sortBy" })
  sortBy?: ProjectSortByTypeEnum;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderTypeEnum;
}
