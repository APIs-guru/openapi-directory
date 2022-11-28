import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalGatewayRouteStateEnum } from "./localgatewayroutestateenum";
import { LocalGatewayRouteTypeEnum } from "./localgatewayroutetypeenum";



// LocalGatewayRoute
/** 
 * Describes a route for a local gateway route table.
**/
export class LocalGatewayRoute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  destinationCidrBlock?: string;

  @SpeakeasyMetadata()
  localGatewayRouteTableArn?: string;

  @SpeakeasyMetadata()
  localGatewayRouteTableId?: string;

  @SpeakeasyMetadata()
  localGatewayVirtualInterfaceGroupId?: string;

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  state?: LocalGatewayRouteStateEnum;

  @SpeakeasyMetadata()
  type?: LocalGatewayRouteTypeEnum;
}
