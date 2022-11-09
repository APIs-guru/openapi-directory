import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ColumnMetadata } from "./columnmetadata";
import { ResultRow } from "./resultrow";
/**
 *  ResultSet contains the results of the request for a single block or list defined on the screen.
**/
export declare class ResultSet extends SpeakeasyBase {
    headers: ColumnMetadata[];
    rows: ResultRow[];
}
