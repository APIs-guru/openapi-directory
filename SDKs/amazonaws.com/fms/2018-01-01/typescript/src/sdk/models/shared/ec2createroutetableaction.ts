import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";



// Ec2CreateRouteTableAction
/** 
 * Information about the CreateRouteTable action in Amazon EC2.
**/
export class Ec2CreateRouteTableAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId: ActionTarget;
}
