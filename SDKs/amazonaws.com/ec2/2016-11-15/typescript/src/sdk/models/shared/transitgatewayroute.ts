import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitGatewayRouteStateEnum } from "./transitgatewayroutestateenum";
import { TransitGatewayRouteAttachment } from "./transitgatewayrouteattachment";
import { TransitGatewayRouteTypeEnum } from "./transitgatewayroutetypeenum";



// TransitGatewayRoute
/** 
 * Describes a route for a transit gateway route table.
**/
export class TransitGatewayRoute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  destinationCidrBlock?: string;

  @SpeakeasyMetadata()
  prefixListId?: string;

  @SpeakeasyMetadata()
  state?: TransitGatewayRouteStateEnum;

  @SpeakeasyMetadata({ elemType: TransitGatewayRouteAttachment })
  transitGatewayAttachments?: TransitGatewayRouteAttachment[];

  @SpeakeasyMetadata()
  type?: TransitGatewayRouteTypeEnum;
}
