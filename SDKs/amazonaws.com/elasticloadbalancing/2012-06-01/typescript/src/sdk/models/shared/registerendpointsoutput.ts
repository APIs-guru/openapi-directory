import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";



// RegisterEndPointsOutput
/** 
 * Contains the output of RegisterInstancesWithLoadBalancer.
**/
export class RegisterEndPointsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Instance })
  instances?: Instance[];
}
