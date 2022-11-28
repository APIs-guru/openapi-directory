import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceCredentials } from "./instancecredentials";
import { OperatingSystemEnum } from "./operatingsystemenum";
/**
 * Information required to remotely connect to a fleet instance. Access is requested by calling <a>GetInstanceAccess</a>.
**/
export declare class InstanceAccess extends SpeakeasyBase {
    credentials?: InstanceCredentials;
    fleetId?: string;
    instanceId?: string;
    ipAddress?: string;
    operatingSystem?: OperatingSystemEnum;
}
