import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EbsInstanceBlockDeviceSpecification } from "./ebsinstanceblockdevicespecification";
/**
 * Defines block device mappings for the instance used to configure your image.
**/
export declare class InstanceBlockDeviceMapping extends SpeakeasyBase {
    deviceName?: string;
    ebs?: EbsInstanceBlockDeviceSpecification;
    noDevice?: string;
    virtualName?: string;
}
