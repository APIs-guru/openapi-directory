import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GreenFleetProvisioningActionEnum } from "./greenfleetprovisioningactionenum";



// GreenFleetProvisioningOption
/** 
 * Information about the instances that belong to the replacement environment in a blue/green deployment.
**/
export class GreenFleetProvisioningOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: GreenFleetProvisioningActionEnum;
}
