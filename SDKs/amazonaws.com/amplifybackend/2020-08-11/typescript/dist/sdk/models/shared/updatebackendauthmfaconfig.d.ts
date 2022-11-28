import { SpeakeasyBase } from "../../../internal/utils";
import { MfaModeEnum } from "./mfamodeenum";
import { Settings } from "./settings";
/**
 * Updates the multi-factor authentication (MFA) configuration for the backend of your Amplify project.
**/
export declare class UpdateBackendAuthMfaConfig extends SpeakeasyBase {
    mfaMode?: MfaModeEnum;
    settings?: Settings;
}
