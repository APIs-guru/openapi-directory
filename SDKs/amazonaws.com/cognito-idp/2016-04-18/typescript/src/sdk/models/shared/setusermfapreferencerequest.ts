import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SmsMfaSettingsType } from "./smsmfasettingstype";
import { SoftwareTokenMfaSettingsType } from "./softwaretokenmfasettingstype";


export class SetUserMfaPreferenceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @Metadata({ data: "json, name=SMSMfaSettings" })
  smsMfaSettings?: SmsMfaSettingsType;

  @Metadata({ data: "json, name=SoftwareTokenMfaSettings" })
  softwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
}
