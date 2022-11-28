import { SpeakeasyBase } from "../../../internal/utils";
import { EbsBlockDeviceConfig } from "./ebsblockdeviceconfig";
/**
 * The Amazon EBS configuration of a cluster instance.
**/
export declare class EbsConfiguration extends SpeakeasyBase {
    ebsBlockDeviceConfigs?: EbsBlockDeviceConfig[];
    ebsOptimized?: boolean;
}
