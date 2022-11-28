import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateAndOverridesResponse } from "./launchtemplateandoverridesresponse";
import { InstanceLifecycleEnum } from "./instancelifecycleenum";
/**
 * Describes the instances that could not be launched by the fleet.
**/
export declare class DescribeFleetError extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    launchTemplateAndOverrides?: LaunchTemplateAndOverridesResponse;
    lifecycle?: InstanceLifecycleEnum;
}
