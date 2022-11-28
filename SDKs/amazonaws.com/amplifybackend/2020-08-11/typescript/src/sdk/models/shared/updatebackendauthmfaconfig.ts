import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MfaModeEnum } from "./mfamodeenum";
import { Settings } from "./settings";



// UpdateBackendAuthMfaConfig
/** 
 * Updates the multi-factor authentication (MFA) configuration for the backend of your Amplify project.
**/
export class UpdateBackendAuthMfaConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MFAMode" })
  mfaMode?: MfaModeEnum;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: Settings;
}
