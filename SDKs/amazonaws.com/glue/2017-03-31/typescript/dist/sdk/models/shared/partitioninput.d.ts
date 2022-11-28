import { SpeakeasyBase } from "../../../internal/utils";
import { StorageDescriptor } from "./storagedescriptor";
/**
 * The structure used to create and update a partition.
**/
export declare class PartitionInput extends SpeakeasyBase {
    lastAccessTime?: Date;
    lastAnalyzedTime?: Date;
    parameters?: Map<string, string>;
    storageDescriptor?: StorageDescriptor;
    values?: string[];
}
