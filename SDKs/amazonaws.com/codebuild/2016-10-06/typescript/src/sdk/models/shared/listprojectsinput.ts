import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectSortByTypeEnum } from "./projectsortbytypeenum";
import { SortOrderTypeEnum } from "./sortordertypeenum";



export class ListProjectsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sortBy" })
  sortBy?: ProjectSortByTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderTypeEnum;
}
