import { SpeakeasyBase } from "../../../internal/utils";
import { DirectConnectGatewayStateEnum } from "./directconnectgatewaystateenum";
/**
 * Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.
**/
export declare class DirectConnectGateway extends SpeakeasyBase {
    amazonSideAsn?: number;
    directConnectGatewayId?: string;
    directConnectGatewayName?: string;
    directConnectGatewayState?: DirectConnectGatewayStateEnum;
    ownerAccount?: string;
    stateChangeError?: string;
}
