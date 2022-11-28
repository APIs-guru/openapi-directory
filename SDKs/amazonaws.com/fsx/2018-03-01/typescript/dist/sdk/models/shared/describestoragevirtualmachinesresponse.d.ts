import { SpeakeasyBase } from "../../../internal/utils";
import { StorageVirtualMachine } from "./storagevirtualmachine";
export declare class DescribeStorageVirtualMachinesResponse extends SpeakeasyBase {
    nextToken?: string;
    storageVirtualMachines?: StorageVirtualMachine[];
}
