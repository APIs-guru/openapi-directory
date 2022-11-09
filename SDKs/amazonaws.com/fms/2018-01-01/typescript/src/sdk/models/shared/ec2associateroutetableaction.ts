import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionTarget } from "./actiontarget";
import { ActionTarget } from "./actiontarget";
import { ActionTarget } from "./actiontarget";


// Ec2AssociateRouteTableAction
/** 
 * The action of associating an EC2 resource, such as a subnet or internet gateway, with a route table.
**/
export class Ec2AssociateRouteTableAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=GatewayId" })
  gatewayId?: ActionTarget;

  @Metadata({ data: "json, name=RouteTableId" })
  routeTableId: ActionTarget;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: ActionTarget;
}
