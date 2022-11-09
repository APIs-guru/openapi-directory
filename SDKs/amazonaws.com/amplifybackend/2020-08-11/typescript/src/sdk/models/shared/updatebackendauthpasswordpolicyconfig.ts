import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdditionalConstraintsElementEnum } from "./additionalconstraintselementenum";


// UpdateBackendAuthPasswordPolicyConfig
/** 
 * Describes the password policy for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
export class UpdateBackendAuthPasswordPolicyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalConstraints" })
  additionalConstraints?: AdditionalConstraintsElementEnum[];

  @Metadata({ data: "json, name=MinimumLength" })
  minimumLength?: number;
}
