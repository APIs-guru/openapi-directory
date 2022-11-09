import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MfaModeEnum } from "./mfamodeenum";
import { Settings } from "./settings";


// CreateBackendAuthMfaConfig
/** 
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
export class CreateBackendAuthMfaConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=MFAMode" })
  mfaMode: MfaModeEnum;

  @Metadata({ data: "json, name=Settings" })
  settings?: Settings;
}
