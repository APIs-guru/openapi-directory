import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdditionalConstraintsElementEnum } from "./additionalconstraintselementenum";



// CreateBackendAuthPasswordPolicyConfig
/** 
 * The password policy configuration for the backend to your Amplify project.
**/
export class CreateBackendAuthPasswordPolicyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalConstraints" })
  additionalConstraints?: AdditionalConstraintsElementEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinimumLength" })
  minimumLength: number;
}
