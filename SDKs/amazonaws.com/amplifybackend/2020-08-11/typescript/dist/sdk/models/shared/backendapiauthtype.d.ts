import { SpeakeasyBase } from "../../../internal/utils";
import { ModeEnum } from "./modeenum";
import { BackendApiAppSyncAuthSettings } from "./backendapiappsyncauthsettings";
/**
 * Describes the auth types for your configured data models.
**/
export declare class BackendApiAuthType extends SpeakeasyBase {
    mode?: ModeEnum;
    settings?: BackendApiAppSyncAuthSettings;
}
