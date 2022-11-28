import { SpeakeasyBase } from "../../../internal/utils";
import { SmsMfaSettingsType } from "./smsmfasettingstype";
import { SoftwareTokenMfaSettingsType } from "./softwaretokenmfasettingstype";
export declare class AdminSetUserMfaPreferenceRequest extends SpeakeasyBase {
    smsMfaSettings?: SmsMfaSettingsType;
    softwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;
    userPoolId: string;
    username: string;
}
