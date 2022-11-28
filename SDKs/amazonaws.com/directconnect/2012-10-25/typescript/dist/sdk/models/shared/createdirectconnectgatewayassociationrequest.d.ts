import { SpeakeasyBase } from "../../../internal/utils";
import { RouteFilterPrefix } from "./routefilterprefix";
export declare class CreateDirectConnectGatewayAssociationRequest extends SpeakeasyBase {
    addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
    directConnectGatewayId: string;
    gatewayId?: string;
    virtualGatewayId?: string;
}
