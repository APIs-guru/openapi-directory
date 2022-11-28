import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";



// Ec2CopyRouteTableAction
/** 
 * An action that copies the EC2 route table for use in remediation.
**/
export class Ec2CopyRouteTableAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=RouteTableId" })
  routeTableId: ActionTarget;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId: ActionTarget;
}
