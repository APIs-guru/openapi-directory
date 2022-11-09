import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cell } from "./cell";


// TableRow
/** 
 * An object that contains attributes about a single row in a table
**/
export class TableRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=cells", elemType: shared.Cell })
  cells: Cell[];

  @Metadata({ data: "json, name=rowId" })
  rowId: string;
}
