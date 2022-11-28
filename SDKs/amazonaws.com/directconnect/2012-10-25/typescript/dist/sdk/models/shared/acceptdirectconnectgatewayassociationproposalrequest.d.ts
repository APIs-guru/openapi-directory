import { SpeakeasyBase } from "../../../internal/utils";
import { RouteFilterPrefix } from "./routefilterprefix";
export declare class AcceptDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
    associatedGatewayOwnerAccount: string;
    directConnectGatewayId: string;
    overrideAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
    proposalId: string;
}
