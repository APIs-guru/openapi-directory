import { SpeakeasyBase } from "../../../internal/utils";
import { EbsInstanceBlockDevice } from "./ebsinstanceblockdevice";
/**
 * Describes a block device mapping.
**/
export declare class InstanceBlockDeviceMapping extends SpeakeasyBase {
    deviceName?: string;
    ebs?: EbsInstanceBlockDevice;
}
