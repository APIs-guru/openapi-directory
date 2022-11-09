import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionTarget } from "./actiontarget";
import { ActionTarget } from "./actiontarget";


// Ec2ReplaceRouteAction
/** 
 * Information about the ReplaceRoute action in Amazon EC2.
**/
export class Ec2ReplaceRouteAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DestinationCidrBlock" })
  destinationCidrBlock?: string;

  @Metadata({ data: "json, name=DestinationIpv6CidrBlock" })
  destinationIpv6CidrBlock?: string;

  @Metadata({ data: "json, name=DestinationPrefixListId" })
  destinationPrefixListId?: string;

  @Metadata({ data: "json, name=GatewayId" })
  gatewayId?: ActionTarget;

  @Metadata({ data: "json, name=RouteTableId" })
  routeTableId: ActionTarget;
}
