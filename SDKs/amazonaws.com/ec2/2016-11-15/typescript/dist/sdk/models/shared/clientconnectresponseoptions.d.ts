import { SpeakeasyBase } from "../../../internal/utils";
import { ClientVpnEndpointAttributeStatus } from "./clientvpnendpointattributestatus";
/**
 * The options for managing connection authorization for new client connections.
**/
export declare class ClientConnectResponseOptions extends SpeakeasyBase {
    enabled?: boolean;
    lambdaFunctionArn?: string;
    status?: ClientVpnEndpointAttributeStatus;
}
