import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CellInput } from "./cellinput";


// UpdateRowData
/** 
 *  Data needed to create a single row in a table as part of the BatchCreateTableRows request. 
**/
export class UpdateRowData extends SpeakeasyBase {
  @Metadata({ data: "json, name=cellsToUpdate", elemType: shared.CellInput })
  cellsToUpdate: Map<string, CellInput>;

  @Metadata({ data: "json, name=rowId" })
  rowId: string;
}
