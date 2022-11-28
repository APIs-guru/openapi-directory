import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransformSortColumnTypeEnum } from "./transformsortcolumntypeenum";
import { SortDirectionTypeEnum } from "./sortdirectiontypeenum";



// TransformSortCriteria
/** 
 * The sorting criteria that are associated with the machine learning transform.
**/
export class TransformSortCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Column" })
  column: TransformSortColumnTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SortDirection" })
  sortDirection: SortDirectionTypeEnum;
}
