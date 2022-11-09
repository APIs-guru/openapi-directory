import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModeEnum } from "./modeenum";
import { BackendApiAppSyncAuthSettings } from "./backendapiappsyncauthsettings";


// BackendApiAuthType
/** 
 * Describes the auth types for your configured data models.
**/
export class BackendApiAuthType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Mode" })
  mode?: ModeEnum;

  @Metadata({ data: "json, name=Settings" })
  settings?: BackendApiAppSyncAuthSettings;
}
