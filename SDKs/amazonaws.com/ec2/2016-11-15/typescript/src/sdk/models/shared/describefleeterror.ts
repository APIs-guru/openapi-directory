import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateAndOverridesResponse } from "./launchtemplateandoverridesresponse";
import { InstanceLifecycleEnum } from "./instancelifecycleenum";



// DescribeFleetError
/** 
 * Describes the instances that could not be launched by the fleet.
**/
export class DescribeFleetError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  errorCode?: string;

  @SpeakeasyMetadata()
  errorMessage?: string;

  @SpeakeasyMetadata()
  launchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;

  @SpeakeasyMetadata()
  lifecycle?: InstanceLifecycleEnum;
}
