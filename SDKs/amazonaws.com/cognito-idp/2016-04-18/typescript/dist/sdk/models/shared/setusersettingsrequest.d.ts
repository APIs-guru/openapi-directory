import { SpeakeasyBase } from "../../../internal/utils";
import { MfaOptionType } from "./mfaoptiontype";
/**
 * Represents the request to set user settings.
**/
export declare class SetUserSettingsRequest extends SpeakeasyBase {
    accessToken: string;
    mfaOptions: MfaOptionType[];
}
