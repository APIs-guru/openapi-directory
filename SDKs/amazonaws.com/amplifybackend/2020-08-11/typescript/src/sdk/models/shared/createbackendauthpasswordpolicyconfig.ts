import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdditionalConstraintsElementEnum } from "./additionalconstraintselementenum";


// CreateBackendAuthPasswordPolicyConfig
/** 
 * The password policy configuration for the backend to your Amplify project.
**/
export class CreateBackendAuthPasswordPolicyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalConstraints" })
  additionalConstraints?: AdditionalConstraintsElementEnum[];

  @Metadata({ data: "json, name=MinimumLength" })
  minimumLength: number;
}
