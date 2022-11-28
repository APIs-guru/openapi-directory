import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildBatchFilter } from "./buildbatchfilter";
import { SortOrderTypeEnum } from "./sortordertypeenum";



export class ListBuildBatchesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: BuildBatchFilter;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: SortOrderTypeEnum;
}
