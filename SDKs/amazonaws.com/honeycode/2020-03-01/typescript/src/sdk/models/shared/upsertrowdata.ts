import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CellInput } from "./cellinput";
import { Filter } from "./filter";



// UpsertRowData
/** 
 *  Data needed to upsert rows in a table as part of a single item in the BatchUpsertTableRows request. 
**/
export class UpsertRowData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchItemId" })
  batchItemId: string;

  @SpeakeasyMetadata({ data: "json, name=cellsToUpdate", elemType: CellInput })
  cellsToUpdate: Map<string, CellInput>;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter: Filter;
}
