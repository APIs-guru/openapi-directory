import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FormatEnum } from "./formatenum";
/**
 * An object that contains attributes about a single column in a table
**/
export declare class TableColumn extends SpeakeasyBase {
    format?: FormatEnum;
    tableColumnId?: string;
    tableColumnName?: string;
}
