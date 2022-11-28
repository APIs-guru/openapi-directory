import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalingParametersStatus } from "./scalingparametersstatus";



// UpdateScalingParametersResponse
/** 
 * The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters.
**/
export class UpdateScalingParametersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  scalingParameters: ScalingParametersStatus;
}
