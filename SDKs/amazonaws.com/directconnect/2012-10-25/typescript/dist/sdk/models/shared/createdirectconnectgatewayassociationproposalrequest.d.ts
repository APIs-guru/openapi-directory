import { SpeakeasyBase } from "../../../internal/utils";
import { RouteFilterPrefix } from "./routefilterprefix";
export declare class CreateDirectConnectGatewayAssociationProposalRequest extends SpeakeasyBase {
    addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
    directConnectGatewayId: string;
    directConnectGatewayOwnerAccount: string;
    gatewayId: string;
    removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}
