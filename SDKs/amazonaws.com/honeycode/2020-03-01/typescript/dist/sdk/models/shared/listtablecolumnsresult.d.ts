import { SpeakeasyBase } from "../../../internal/utils";
import { TableColumn } from "./tablecolumn";
export declare class ListTableColumnsResult extends SpeakeasyBase {
    nextToken?: string;
    tableColumns: TableColumn[];
    workbookCursor?: number;
}
