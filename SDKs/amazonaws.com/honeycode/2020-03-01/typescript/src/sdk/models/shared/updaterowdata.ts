import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CellInput } from "./cellinput";



// UpdateRowData
/** 
 *  Data needed to create a single row in a table as part of the BatchCreateTableRows request. 
**/
export class UpdateRowData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cellsToUpdate", elemType: CellInput })
  cellsToUpdate: Map<string, CellInput>;

  @SpeakeasyMetadata({ data: "json, name=rowId" })
  rowId: string;
}
