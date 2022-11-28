import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingParametersStatus } from "./scalingparametersstatus";
/**
 * The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters.
**/
export declare class UpdateScalingParametersResponse extends SpeakeasyBase {
    scalingParameters: ScalingParametersStatus;
}
