import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Order
/** 
 * Specifies the sort order of a sorted column.
**/
export class Order extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Column" })
  column: string;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder: number;
}
