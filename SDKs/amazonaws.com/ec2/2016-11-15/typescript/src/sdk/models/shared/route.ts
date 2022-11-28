import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteOriginEnum } from "./routeoriginenum";
import { RouteStateEnum } from "./routestateenum";



// Route
/** 
 * Describes a route in a route table.
**/
export class Route extends SpeakeasyBase {
  @SpeakeasyMetadata()
  carrierGatewayId?: string;

  @SpeakeasyMetadata()
  destinationCidrBlock?: string;

  @SpeakeasyMetadata()
  destinationIpv6CidrBlock?: string;

  @SpeakeasyMetadata()
  destinationPrefixListId?: string;

  @SpeakeasyMetadata()
  egressOnlyInternetGatewayId?: string;

  @SpeakeasyMetadata()
  gatewayId?: string;

  @SpeakeasyMetadata()
  instanceId?: string;

  @SpeakeasyMetadata()
  instanceOwnerId?: string;

  @SpeakeasyMetadata()
  localGatewayId?: string;

  @SpeakeasyMetadata()
  natGatewayId?: string;

  @SpeakeasyMetadata()
  networkInterfaceId?: string;

  @SpeakeasyMetadata()
  origin?: RouteOriginEnum;

  @SpeakeasyMetadata()
  state?: RouteStateEnum;

  @SpeakeasyMetadata()
  transitGatewayId?: string;

  @SpeakeasyMetadata()
  vpcPeeringConnectionId?: string;
}
