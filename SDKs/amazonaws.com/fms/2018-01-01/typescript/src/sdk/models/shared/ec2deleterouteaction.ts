import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";



// Ec2DeleteRouteAction
/** 
 * Information about the DeleteRoute action in Amazon EC2.
**/
export class Ec2DeleteRouteAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationCidrBlock" })
  destinationCidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationIpv6CidrBlock" })
  destinationIpv6CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationPrefixListId" })
  destinationPrefixListId?: string;

  @SpeakeasyMetadata({ data: "json, name=RouteTableId" })
  routeTableId: ActionTarget;
}
