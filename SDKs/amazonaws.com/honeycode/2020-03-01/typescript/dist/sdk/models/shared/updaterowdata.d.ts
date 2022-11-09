import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CellInput } from "./cellinput";
/**
 *  Data needed to create a single row in a table as part of the BatchCreateTableRows request.
**/
export declare class UpdateRowData extends SpeakeasyBase {
    cellsToUpdate: Map<string, CellInput>;
    rowId: string;
}
