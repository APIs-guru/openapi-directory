import { SpeakeasyBase } from "../../../internal/utils";
import { DiskTypeEnum } from "./disktypeenum";
/**
 * Describes the disk.
**/
export declare class DiskInfo extends SpeakeasyBase {
    count?: number;
    sizeInGb?: number;
    type?: DiskTypeEnum;
}
