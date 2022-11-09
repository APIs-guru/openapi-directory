import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FormatEnum } from "./formatenum";
/**
 * An object that represents a single cell in a table.
**/
export declare class Cell extends SpeakeasyBase {
    format?: FormatEnum;
    formattedValue?: string;
    formula?: string;
    rawValue?: string;
}
