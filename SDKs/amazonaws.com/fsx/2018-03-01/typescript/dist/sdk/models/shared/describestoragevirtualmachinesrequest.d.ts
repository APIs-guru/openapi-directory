import { SpeakeasyBase } from "../../../internal/utils";
import { StorageVirtualMachineFilter } from "./storagevirtualmachinefilter";
export declare class DescribeStorageVirtualMachinesRequest extends SpeakeasyBase {
    filters?: StorageVirtualMachineFilter[];
    maxResults?: number;
    nextToken?: string;
    storageVirtualMachineIds?: string[];
}
