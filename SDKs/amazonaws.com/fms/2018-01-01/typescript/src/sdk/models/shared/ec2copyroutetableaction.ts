import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionTarget } from "./actiontarget";
import { ActionTarget } from "./actiontarget";


// Ec2CopyRouteTableAction
/** 
 * An action that copies the EC2 route table for use in remediation.
**/
export class Ec2CopyRouteTableAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=RouteTableId" })
  routeTableId: ActionTarget;

  @Metadata({ data: "json, name=VpcId" })
  vpcId: ActionTarget;
}
