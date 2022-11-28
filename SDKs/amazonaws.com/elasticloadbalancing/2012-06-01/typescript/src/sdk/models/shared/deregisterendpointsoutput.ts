import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";



// DeregisterEndPointsOutput
/** 
 * Contains the output of DeregisterInstancesFromLoadBalancer.
**/
export class DeregisterEndPointsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Instance })
  instances?: Instance[];
}
