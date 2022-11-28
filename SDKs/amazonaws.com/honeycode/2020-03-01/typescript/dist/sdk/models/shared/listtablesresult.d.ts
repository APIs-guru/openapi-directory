import { SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";
export declare class ListTablesResult extends SpeakeasyBase {
    nextToken?: string;
    tables: Table[];
    workbookCursor?: number;
}
