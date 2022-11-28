import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SmsMfaSettingsType } from "./smsmfasettingstype";
import { SoftwareTokenMfaSettingsType } from "./softwaretokenmfasettingstype";



export class SetUserMfaPreferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=SMSMfaSettings" })
  smsMfaSettings?: SmsMfaSettingsType;

  @SpeakeasyMetadata({ data: "json, name=SoftwareTokenMfaSettings" })
  softwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
}
