import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransformSortColumnTypeEnum } from "./transformsortcolumntypeenum";
import { SortDirectionTypeEnum } from "./sortdirectiontypeenum";


// TransformSortCriteria
/** 
 * The sorting criteria that are associated with the machine learning transform.
**/
export class TransformSortCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=Column" })
  column: TransformSortColumnTypeEnum;

  @Metadata({ data: "json, name=SortDirection" })
  sortDirection: SortDirectionTypeEnum;
}
