import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceActionEnum } from "./instanceactionenum";



// BlueInstanceTerminationOption
/** 
 * Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments. 
**/
export class BlueInstanceTerminationOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: InstanceActionEnum;

  @SpeakeasyMetadata({ data: "json, name=terminationWaitTimeInMinutes" })
  terminationWaitTimeInMinutes?: number;
}
