import { SpeakeasyBase } from "../../../internal/utils";
import { DiskInfo } from "./diskinfo";
import { EphemeralNvmeSupportEnum } from "./ephemeralnvmesupportenum";
/**
 * Describes the disks that are available for the instance type.
**/
export declare class InstanceStorageInfo extends SpeakeasyBase {
    disks?: DiskInfo[];
    nvmeSupport?: EphemeralNvmeSupportEnum;
    totalSizeInGb?: number;
}
