import { SpeakeasyBase } from "../../../internal/utils";
import { PasswordPolicy } from "./passwordpolicy";
/**
 * Contains the response to a successful <a>GetAccountPasswordPolicy</a> request.
**/
export declare class GetAccountPasswordPolicyResponse extends SpeakeasyBase {
    passwordPolicy: PasswordPolicy;
}
