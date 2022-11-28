import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";



// Ec2CreateRouteAction
/** 
 * Information about the CreateRoute action in Amazon EC2.
**/
export class Ec2CreateRouteAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationCidrBlock" })
  destinationCidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationIpv6CidrBlock" })
  destinationIpv6CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationPrefixListId" })
  destinationPrefixListId?: string;

  @SpeakeasyMetadata({ data: "json, name=GatewayId" })
  gatewayId?: ActionTarget;

  @SpeakeasyMetadata({ data: "json, name=RouteTableId" })
  routeTableId: ActionTarget;

  @SpeakeasyMetadata({ data: "json, name=VpcEndpointId" })
  vpcEndpointId?: ActionTarget;
}
