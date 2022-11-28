import { SpeakeasyBase } from "../../../internal/utils";
import { StorageDescriptor } from "./storagedescriptor";
/**
 * Represents a slice of table data.
**/
export declare class Partition extends SpeakeasyBase {
    catalogId?: string;
    creationTime?: Date;
    databaseName?: string;
    lastAccessTime?: Date;
    lastAnalyzedTime?: Date;
    parameters?: Map<string, string>;
    storageDescriptor?: StorageDescriptor;
    tableName?: string;
    values?: string[];
}
