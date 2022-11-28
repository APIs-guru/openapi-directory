import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains information about the account password policy.</p> <p> This data type is used as a response element in the <a>GetAccountPasswordPolicy</a> operation. </p>
**/
export declare class PasswordPolicy extends SpeakeasyBase {
    allowUsersToChangePassword?: boolean;
    expirePasswords?: boolean;
    hardExpiry?: boolean;
    maxPasswordAge?: number;
    minimumPasswordLength?: number;
    passwordReusePrevention?: number;
    requireLowercaseCharacters?: boolean;
    requireNumbers?: boolean;
    requireSymbols?: boolean;
    requireUppercaseCharacters?: boolean;
}
