import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdditionalConstraintsElementEnum } from "./additionalconstraintselementenum";



// UpdateBackendAuthPasswordPolicyConfig
/** 
 * Describes the password policy for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
export class UpdateBackendAuthPasswordPolicyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalConstraints" })
  additionalConstraints?: AdditionalConstraintsElementEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinimumLength" })
  minimumLength?: number;
}
