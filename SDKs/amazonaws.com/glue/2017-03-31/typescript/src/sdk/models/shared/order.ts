import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Order
/** 
 * Specifies the sort order of a sorted column.
**/
export class Order extends SpeakeasyBase {
  @Metadata({ data: "json, name=Column" })
  column: string;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder: number;
}
