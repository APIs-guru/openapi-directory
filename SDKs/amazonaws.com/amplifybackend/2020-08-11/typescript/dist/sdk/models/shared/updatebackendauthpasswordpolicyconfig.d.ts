import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalConstraintsElementEnum } from "./additionalconstraintselementenum";
/**
 * Describes the password policy for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
export declare class UpdateBackendAuthPasswordPolicyConfig extends SpeakeasyBase {
    additionalConstraints?: AdditionalConstraintsElementEnum[];
    minimumLength?: number;
}
