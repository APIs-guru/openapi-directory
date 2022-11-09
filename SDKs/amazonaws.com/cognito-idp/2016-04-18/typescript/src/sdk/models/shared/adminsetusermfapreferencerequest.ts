import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SmsMfaSettingsType } from "./smsmfasettingstype";
import { SoftwareTokenMfaSettingsType } from "./softwaretokenmfasettingstype";


export class AdminSetUserMfaPreferenceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SMSMfaSettings" })
  smsMfaSettings?: SmsMfaSettingsType;

  @Metadata({ data: "json, name=SoftwareTokenMfaSettings" })
  softwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;

  @Metadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
