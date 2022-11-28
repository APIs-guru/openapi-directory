import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";
/**
 * Defines a custom source AMI and block device mapping configurations of an instance used for building and testing container images.
**/
export declare class InstanceConfiguration extends SpeakeasyBase {
    blockDeviceMappings?: InstanceBlockDeviceMapping[];
    image?: string;
}
