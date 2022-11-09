import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MfaModeEnum } from "./mfamodeenum";
import { Settings } from "./settings";


// UpdateBackendAuthMfaConfig
/** 
 * Updates the multi-factor authentication (MFA) configuration for the backend of your Amplify project.
**/
export class UpdateBackendAuthMfaConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=MFAMode" })
  mfaMode?: MfaModeEnum;

  @Metadata({ data: "json, name=Settings" })
  settings?: Settings;
}
