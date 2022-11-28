import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalingParametersStatus } from "./scalingparametersstatus";



// DescribeScalingParametersResponse
/** 
 * The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request.
**/
export class DescribeScalingParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  scalingParameters: ScalingParametersStatus;
}
