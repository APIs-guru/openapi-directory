import { SpeakeasyBase } from "../../../internal/utils";
import { RouteFilterPrefix } from "./routefilterprefix";
import { AssociatedGateway } from "./associatedgateway";
import { DirectConnectGatewayAssociationStateEnum } from "./directconnectgatewayassociationstateenum";
/**
 * Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.
**/
export declare class DirectConnectGatewayAssociation extends SpeakeasyBase {
    allowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
    associatedGateway?: AssociatedGateway;
    associationId?: string;
    associationState?: DirectConnectGatewayAssociationStateEnum;
    directConnectGatewayId?: string;
    directConnectGatewayOwnerAccount?: string;
    stateChangeError?: string;
    virtualGatewayId?: string;
    virtualGatewayOwnerAccount?: string;
    virtualGatewayRegion?: string;
}
