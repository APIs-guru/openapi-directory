import { SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
import { EbsBlockDevice } from "./ebsblockdevice";
/**
 * <p>The configuration specification for each instance type in an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
**/
export declare class InstanceTypeSpecification extends SpeakeasyBase {
    bidPrice?: string;
    bidPriceAsPercentageOfOnDemandPrice?: number;
    configurations?: Configuration[];
    customAmiId?: string;
    ebsBlockDevices?: EbsBlockDevice[];
    ebsOptimized?: boolean;
    instanceType?: string;
    weightedCapacity?: number;
}
