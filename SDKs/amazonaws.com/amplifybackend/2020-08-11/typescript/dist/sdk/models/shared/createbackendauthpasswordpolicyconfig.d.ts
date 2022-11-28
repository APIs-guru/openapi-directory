import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalConstraintsElementEnum } from "./additionalconstraintselementenum";
/**
 * The password policy configuration for the backend to your Amplify project.
**/
export declare class CreateBackendAuthPasswordPolicyConfig extends SpeakeasyBase {
    additionalConstraints?: AdditionalConstraintsElementEnum[];
    minimumLength: number;
}
