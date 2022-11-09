import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BuildBatchFilter } from "./buildbatchfilter";
import { SortOrderTypeEnum } from "./sortordertypeenum";


export class ListBuildBatchesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: BuildBatchFilter;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderTypeEnum;
}
