import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionTarget } from "./actiontarget";


// Ec2CreateRouteTableAction
/** 
 * Information about the CreateRouteTable action in Amazon EC2.
**/
export class Ec2CreateRouteTableAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId: ActionTarget;
}
