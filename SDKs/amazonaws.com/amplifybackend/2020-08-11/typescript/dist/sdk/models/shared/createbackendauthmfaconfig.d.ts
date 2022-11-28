import { SpeakeasyBase } from "../../../internal/utils";
import { MfaModeEnum } from "./mfamodeenum";
import { Settings } from "./settings";
/**
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
export declare class CreateBackendAuthMfaConfig extends SpeakeasyBase {
    mfaMode: MfaModeEnum;
    settings?: Settings;
}
