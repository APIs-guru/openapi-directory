import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SmsMfaSettingsType } from "./smsmfasettingstype";
import { SoftwareTokenMfaSettingsType } from "./softwaretokenmfasettingstype";



export class AdminSetUserMfaPreferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SMSMfaSettings" })
  smsMfaSettings?: SmsMfaSettingsType;

  @SpeakeasyMetadata({ data: "json, name=SoftwareTokenMfaSettings" })
  softwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;

  @SpeakeasyMetadata({ data: "json, name=UserPoolId" })
  userPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
