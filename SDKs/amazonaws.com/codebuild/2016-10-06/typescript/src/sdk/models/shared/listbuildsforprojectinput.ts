import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SortOrderTypeEnum } from "./sortordertypeenum";



export class ListBuildsForProjectInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=projectName" })
  projectName: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderTypeEnum;
}
