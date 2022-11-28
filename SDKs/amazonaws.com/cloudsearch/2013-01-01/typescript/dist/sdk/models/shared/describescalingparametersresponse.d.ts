import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingParametersStatus } from "./scalingparametersstatus";
/**
 * The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request.
**/
export declare class DescribeScalingParametersResponse extends SpeakeasyBase {
    scalingParameters: ScalingParametersStatus;
}
