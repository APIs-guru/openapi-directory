import { SpeakeasyBase } from "../../../internal/utils";
import { EbsBlockDevice } from "./ebsblockdevice";
/**
 * Describes a block device mapping, which defines the EBS volumes and instance store volumes to attach to an instance at launch.
**/
export declare class BlockDeviceMapping extends SpeakeasyBase {
    deviceName?: string;
    ebs?: EbsBlockDevice;
    noDevice?: string;
    virtualName?: string;
}
