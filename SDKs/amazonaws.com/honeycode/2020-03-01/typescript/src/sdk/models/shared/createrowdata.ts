import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CellInput } from "./cellinput";



// CreateRowData
/** 
 *  Data needed to create a single row in a table as part of the BatchCreateTableRows request. 
**/
export class CreateRowData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchItemId" })
  batchItemId: string;

  @SpeakeasyMetadata({ data: "json, name=cellsToCreate", elemType: CellInput })
  cellsToCreate: Map<string, CellInput>;
}
