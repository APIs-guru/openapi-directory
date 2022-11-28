import { SpeakeasyBase } from "../../../internal/utils";
import { DiskIopsConfigurationModeEnum } from "./diskiopsconfigurationmodeenum";
/**
 * The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP file system. The default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per GB of storage. The configuration consists of the total number of provisioned SSD IOPS and how the amount was provisioned (by the customer or by the system).
**/
export declare class DiskIopsConfiguration extends SpeakeasyBase {
    iops?: number;
    mode?: DiskIopsConfigurationModeEnum;
}
