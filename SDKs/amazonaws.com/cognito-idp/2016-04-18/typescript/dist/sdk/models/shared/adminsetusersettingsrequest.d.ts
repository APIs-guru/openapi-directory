import { SpeakeasyBase } from "../../../internal/utils";
import { MfaOptionType } from "./mfaoptiontype";
/**
 * You can use this parameter to set an MFA configuration that uses the SMS delivery medium.
**/
export declare class AdminSetUserSettingsRequest extends SpeakeasyBase {
    mfaOptions: MfaOptionType[];
    userPoolId: string;
    username: string;
}
