import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationSettings
/** 
 * The persistent application settings for users of a stack.
**/
export class ApplicationSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=SettingsGroup" })
  settingsGroup?: string;
}
