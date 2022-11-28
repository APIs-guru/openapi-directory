import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateEbsBlockDevice } from "./launchtemplateebsblockdevice";
/**
 * Describes a block device mapping.
**/
export declare class LaunchTemplateBlockDeviceMapping extends SpeakeasyBase {
    deviceName?: string;
    ebs?: LaunchTemplateEbsBlockDevice;
    noDevice?: string;
    virtualName?: string;
}
