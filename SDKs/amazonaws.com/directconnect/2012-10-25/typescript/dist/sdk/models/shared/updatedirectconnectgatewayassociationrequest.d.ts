import { SpeakeasyBase } from "../../../internal/utils";
import { RouteFilterPrefix } from "./routefilterprefix";
export declare class UpdateDirectConnectGatewayAssociationRequest extends SpeakeasyBase {
    addAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
    associationId?: string;
    removeAllowedPrefixesToDirectConnectGateway?: RouteFilterPrefix[];
}
