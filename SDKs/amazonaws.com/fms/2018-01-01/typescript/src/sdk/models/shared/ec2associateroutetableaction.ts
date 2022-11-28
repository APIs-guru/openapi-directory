import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";



// Ec2AssociateRouteTableAction
/** 
 * The action of associating an EC2 resource, such as a subnet or internet gateway, with a route table.
**/
export class Ec2AssociateRouteTableAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=GatewayId" })
  gatewayId?: ActionTarget;

  @SpeakeasyMetadata({ data: "json, name=RouteTableId" })
  routeTableId: ActionTarget;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: ActionTarget;
}
