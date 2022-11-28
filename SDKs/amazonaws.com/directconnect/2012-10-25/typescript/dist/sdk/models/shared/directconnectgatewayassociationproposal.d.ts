import { SpeakeasyBase } from "../../../internal/utils";
import { AssociatedGateway } from "./associatedgateway";
import { RouteFilterPrefix } from "./routefilterprefix";
import { DirectConnectGatewayAssociationProposalStateEnum } from "./directconnectgatewayassociationproposalstateenum";
/**
 * Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway.
**/
export declare class DirectConnectGatewayAssociationProposal extends SpeakeasyBase {
    associatedGateway?: AssociatedGateway;
    directConnectGatewayId?: string;
    directConnectGatewayOwnerAccount?: string;
    existingAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
    proposalId?: string;
    proposalState?: DirectConnectGatewayAssociationProposalStateEnum;
    requestedAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}
