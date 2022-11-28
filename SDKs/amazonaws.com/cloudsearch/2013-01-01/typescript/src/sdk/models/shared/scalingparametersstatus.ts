import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScalingParameters } from "./scalingparameters";
import { OptionStatus } from "./optionstatus";



// ScalingParametersStatus
/** 
 * The status and configuration of a search domain's scaling parameters. 
**/
export class ScalingParametersStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  options: ScalingParameters;

  @SpeakeasyMetadata()
  status: OptionStatus;
}
