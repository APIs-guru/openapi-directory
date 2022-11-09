import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionTarget } from "./actiontarget";
import { ActionTarget } from "./actiontarget";
import { ActionTarget } from "./actiontarget";


// Ec2CreateRouteAction
/** 
 * Information about the CreateRoute action in Amazon EC2.
**/
export class Ec2CreateRouteAction extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=VpcEndpointId" })
  vpcEndpointId?: ActionTarget;
}
