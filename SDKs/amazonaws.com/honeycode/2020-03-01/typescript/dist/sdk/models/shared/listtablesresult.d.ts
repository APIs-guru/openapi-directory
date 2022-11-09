import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Table } from "./table";
export declare class ListTablesResult extends SpeakeasyBase {
    nextToken?: string;
    tables: Table[];
    workbookCursor?: number;
}
