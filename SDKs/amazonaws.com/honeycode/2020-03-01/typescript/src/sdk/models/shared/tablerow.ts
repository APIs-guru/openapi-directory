import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cell } from "./cell";



// TableRow
/** 
 * An object that contains attributes about a single row in a table
**/
export class TableRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cells", elemType: Cell })
  cells: Cell[];

  @SpeakeasyMetadata({ data: "json, name=rowId" })
  rowId: string;
}
