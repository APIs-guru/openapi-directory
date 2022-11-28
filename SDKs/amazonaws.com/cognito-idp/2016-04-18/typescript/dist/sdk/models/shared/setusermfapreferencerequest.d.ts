import { SpeakeasyBase } from "../../../internal/utils";
import { SmsMfaSettingsType } from "./smsmfasettingstype";
import { SoftwareTokenMfaSettingsType } from "./softwaretokenmfasettingstype";
export declare class SetUserMfaPreferenceRequest extends SpeakeasyBase {
    accessToken: string;
    smsMfaSettings?: SmsMfaSettingsType;
    softwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
}
