import { SpeakeasyBase } from "../../../internal/utils";
import { RadiusAuthenticationProtocolEnum } from "./radiusauthenticationprotocolenum";
/**
 * Contains information about a Remote Authentication Dial In User Service (RADIUS) server.
**/
export declare class RadiusSettings extends SpeakeasyBase {
    authenticationProtocol?: RadiusAuthenticationProtocolEnum;
    displayLabel?: string;
    radiusPort?: number;
    radiusRetries?: number;
    radiusServers?: string[];
    radiusTimeout?: number;
    sharedSecret?: string;
    useSameUsername?: boolean;
}
