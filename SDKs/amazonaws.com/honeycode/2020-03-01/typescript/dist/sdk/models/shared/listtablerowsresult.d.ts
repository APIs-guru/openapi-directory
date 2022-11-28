import { SpeakeasyBase } from "../../../internal/utils";
import { TableRow } from "./tablerow";
export declare class ListTableRowsResult extends SpeakeasyBase {
    columnIds: string[];
    nextToken?: string;
    rowIdsNotFound?: string[];
    rows: TableRow[];
    workbookCursor: number;
}
