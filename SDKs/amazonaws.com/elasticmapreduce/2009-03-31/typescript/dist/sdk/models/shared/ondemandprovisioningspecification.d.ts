import { SpeakeasyBase } from "../../../internal/utils";
import { OnDemandProvisioningAllocationStrategyEnum } from "./ondemandprovisioningallocationstrategyenum";
import { OnDemandCapacityReservationOptions } from "./ondemandcapacityreservationoptions";
/**
 * <p> The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in Amazon EMR version 5.12.1 and later.</p> </note>
**/
export declare class OnDemandProvisioningSpecification extends SpeakeasyBase {
    allocationStrategy: OnDemandProvisioningAllocationStrategyEnum;
    capacityReservationOptions?: OnDemandCapacityReservationOptions;
}
