import { SpeakeasyBase } from "../../../internal/utils";
import { Cell } from "./cell";
/**
 * An object that contains attributes about a single row in a table
**/
export declare class TableRow extends SpeakeasyBase {
    cells: Cell[];
    rowId: string;
}
