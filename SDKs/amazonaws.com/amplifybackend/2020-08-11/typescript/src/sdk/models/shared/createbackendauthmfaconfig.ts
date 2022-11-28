import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MfaModeEnum } from "./mfamodeenum";
import { Settings } from "./settings";



// CreateBackendAuthMfaConfig
/** 
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
export class CreateBackendAuthMfaConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MFAMode" })
  mfaMode: MfaModeEnum;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: Settings;
}
