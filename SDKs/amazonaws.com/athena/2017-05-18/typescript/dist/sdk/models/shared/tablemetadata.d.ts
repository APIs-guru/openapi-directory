import { SpeakeasyBase } from "../../../internal/utils";
import { Column } from "./column";
/**
 * Contains metadata for a table.
**/
export declare class TableMetadata extends SpeakeasyBase {
    columns?: Column[];
    createTime?: Date;
    lastAccessTime?: Date;
    name: string;
    parameters?: Map<string, string>;
    partitionKeys?: Column[];
    tableType?: string;
}
