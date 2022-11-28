import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The password policy type.
**/
export declare class PasswordPolicyType extends SpeakeasyBase {
    minimumLength?: number;
    requireLowercase?: boolean;
    requireNumbers?: boolean;
    requireSymbols?: boolean;
    requireUppercase?: boolean;
    temporaryPasswordValidityDays?: number;
}
