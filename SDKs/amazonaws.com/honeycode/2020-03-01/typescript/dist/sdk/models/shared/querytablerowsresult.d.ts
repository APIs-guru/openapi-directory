import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TableRow } from "./tablerow";
export declare class QueryTableRowsResult extends SpeakeasyBase {
    columnIds: string[];
    nextToken?: string;
    rows: TableRow[];
    workbookCursor: number;
}
