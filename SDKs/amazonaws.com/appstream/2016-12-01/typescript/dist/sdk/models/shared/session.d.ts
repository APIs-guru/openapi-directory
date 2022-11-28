import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
import { SessionConnectionStateEnum } from "./sessionconnectionstateenum";
import { NetworkAccessConfiguration } from "./networkaccessconfiguration";
import { SessionStateEnum } from "./sessionstateenum";
/**
 * Describes a streaming session.
**/
export declare class Session extends SpeakeasyBase {
    authenticationType?: AuthenticationTypeEnum;
    connectionState?: SessionConnectionStateEnum;
    fleetName: string;
    id: string;
    maxExpirationTime?: Date;
    networkAccessConfiguration?: NetworkAccessConfiguration;
    stackName: string;
    startTime?: Date;
    state: SessionStateEnum;
    userId: string;
}
