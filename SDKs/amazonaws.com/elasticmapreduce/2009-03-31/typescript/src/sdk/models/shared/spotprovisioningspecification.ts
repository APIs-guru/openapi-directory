import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpotProvisioningAllocationStrategyEnum } from "./spotprovisioningallocationstrategyenum";
import { SpotProvisioningTimeoutActionEnum } from "./spotprovisioningtimeoutactionenum";



// SpotProvisioningSpecification
/** 
 * <p>The launch specification for Spot Instances in the instance fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. Spot Instance allocation strategy is available in Amazon EMR version 5.12.1 and later.</p> </note>
**/
export class SpotProvisioningSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllocationStrategy" })
  allocationStrategy?: SpotProvisioningAllocationStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=BlockDurationMinutes" })
  blockDurationMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=TimeoutAction" })
  timeoutAction: SpotProvisioningTimeoutActionEnum;

  @SpeakeasyMetadata({ data: "json, name=TimeoutDurationMinutes" })
  timeoutDurationMinutes: number;
}
