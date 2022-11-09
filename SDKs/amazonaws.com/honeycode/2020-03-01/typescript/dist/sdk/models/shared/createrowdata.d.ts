import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CellInput } from "./cellinput";
/**
 *  Data needed to create a single row in a table as part of the BatchCreateTableRows request.
**/
export declare class CreateRowData extends SpeakeasyBase {
    batchItemId: string;
    cellsToCreate: Map<string, CellInput>;
}
