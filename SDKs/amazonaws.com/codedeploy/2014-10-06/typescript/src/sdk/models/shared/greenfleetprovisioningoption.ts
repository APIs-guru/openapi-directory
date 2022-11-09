import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GreenFleetProvisioningActionEnum } from "./greenfleetprovisioningactionenum";


// GreenFleetProvisioningOption
/** 
 * Information about the instances that belong to the replacement environment in a blue/green deployment.
**/
export class GreenFleetProvisioningOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: GreenFleetProvisioningActionEnum;
}
