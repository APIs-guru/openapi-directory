import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationSettings
/** 
 * The persistent application settings for users of a stack.
**/
export class ApplicationSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=Enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=SettingsGroup" })
  settingsGroup?: string;
}
