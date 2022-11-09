import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CellInput } from "./cellinput";
import { Filter } from "./filter";


// UpsertRowData
/** 
 *  Data needed to upsert rows in a table as part of a single item in the BatchUpsertTableRows request. 
**/
export class UpsertRowData extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchItemId" })
  batchItemId: string;

  @Metadata({ data: "json, name=cellsToUpdate", elemType: shared.CellInput })
  cellsToUpdate: Map<string, CellInput>;

  @Metadata({ data: "json, name=filter" })
  filter: Filter;
}
