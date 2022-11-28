import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModeEnum } from "./modeenum";
import { BackendApiAppSyncAuthSettings } from "./backendapiappsyncauthsettings";



// BackendApiAuthType
/** 
 * Describes the auth types for your configured data models.
**/
export class BackendApiAuthType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: ModeEnum;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: BackendApiAppSyncAuthSettings;
}
