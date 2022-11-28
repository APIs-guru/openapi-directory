import { SpeakeasyBase } from "../../../internal/utils";
import { Column } from "./column";
import { StorageDescriptor } from "./storagedescriptor";
import { TableIdentifier } from "./tableidentifier";
/**
 * A structure used to define a table.
**/
export declare class TableInput extends SpeakeasyBase {
    description?: string;
    lastAccessTime?: Date;
    lastAnalyzedTime?: Date;
    name: string;
    owner?: string;
    parameters?: Map<string, string>;
    partitionKeys?: Column[];
    retention?: number;
    storageDescriptor?: StorageDescriptor;
    tableType?: string;
    targetTable?: TableIdentifier;
    viewExpandedText?: string;
    viewOriginalText?: string;
}
