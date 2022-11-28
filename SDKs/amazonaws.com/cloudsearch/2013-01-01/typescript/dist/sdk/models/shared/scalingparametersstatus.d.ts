import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingParameters } from "./scalingparameters";
import { OptionStatus } from "./optionstatus";
/**
 * The status and configuration of a search domain's scaling parameters.
**/
export declare class ScalingParametersStatus extends SpeakeasyBase {
    options: ScalingParameters;
    status: OptionStatus;
}
