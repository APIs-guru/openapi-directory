import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouteFilterPrefix } from "./routefilterprefix";
import { AssociatedGateway } from "./associatedgateway";
import { DirectConnectGatewayAssociationStateEnum } from "./directconnectgatewayassociationstateenum";



// DirectConnectGatewayAssociation
/** 
 * Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.
**/
export class DirectConnectGatewayAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedPrefixesToDirectConnectGateway", elemType: RouteFilterPrefix })
  allowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  @SpeakeasyMetadata({ data: "json, name=associatedGateway" })
  associatedGateway?: AssociatedGateway;

  @SpeakeasyMetadata({ data: "json, name=associationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=associationState" })
  associationState?: DirectConnectGatewayAssociationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=directConnectGatewayOwnerAccount" })
  directConnectGatewayOwnerAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=stateChangeError" })
  stateChangeError?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualGatewayId" })
  virtualGatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualGatewayOwnerAccount" })
  virtualGatewayOwnerAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualGatewayRegion" })
  virtualGatewayRegion?: string;
}
