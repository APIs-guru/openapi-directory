import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DataItem } from "./dataitem";
/**
 * A single row in the ResultSet.
**/
export declare class ResultRow extends SpeakeasyBase {
    dataItems: DataItem[];
    rowId?: string;
}
