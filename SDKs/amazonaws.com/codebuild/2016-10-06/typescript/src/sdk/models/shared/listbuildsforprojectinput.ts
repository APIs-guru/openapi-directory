import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortOrderTypeEnum } from "./sortordertypeenum";


export class ListBuildsForProjectInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=projectName" })
  projectName: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderTypeEnum;
}
