import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CellInput } from "./cellinput";


// CreateRowData
/** 
 *  Data needed to create a single row in a table as part of the BatchCreateTableRows request. 
**/
export class CreateRowData extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchItemId" })
  batchItemId: string;

  @Metadata({ data: "json, name=cellsToCreate", elemType: shared.CellInput })
  cellsToCreate: Map<string, CellInput>;
}
