import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceActionEnum } from "./instanceactionenum";


// BlueInstanceTerminationOption
/** 
 * Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments. 
**/
export class BlueInstanceTerminationOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: InstanceActionEnum;

  @Metadata({ data: "json, name=terminationWaitTimeInMinutes" })
  terminationWaitTimeInMinutes?: number;
}
