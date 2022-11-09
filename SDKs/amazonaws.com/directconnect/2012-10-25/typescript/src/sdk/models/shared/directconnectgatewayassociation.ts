import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RouteFilterPrefix } from "./routefilterprefix";
import { AssociatedGateway } from "./associatedgateway";
import { DirectConnectGatewayAssociationStateEnum } from "./directconnectgatewayassociationstateenum";


// DirectConnectGatewayAssociation
/** 
 * Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.
**/
export class DirectConnectGatewayAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedPrefixesToDirectConnectGateway", elemType: shared.RouteFilterPrefix })
  allowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];

  @Metadata({ data: "json, name=associatedGateway" })
  associatedGateway?: AssociatedGateway;

  @Metadata({ data: "json, name=associationId" })
  associationId?: string;

  @Metadata({ data: "json, name=associationState" })
  associationState?: DirectConnectGatewayAssociationStateEnum;

  @Metadata({ data: "json, name=directConnectGatewayId" })
  directConnectGatewayId?: string;

  @Metadata({ data: "json, name=directConnectGatewayOwnerAccount" })
  directConnectGatewayOwnerAccount?: string;

  @Metadata({ data: "json, name=stateChangeError" })
  stateChangeError?: string;

  @Metadata({ data: "json, name=virtualGatewayId" })
  virtualGatewayId?: string;

  @Metadata({ data: "json, name=virtualGatewayOwnerAccount" })
  virtualGatewayOwnerAccount?: string;

  @Metadata({ data: "json, name=virtualGatewayRegion" })
  virtualGatewayRegion?: string;
}
