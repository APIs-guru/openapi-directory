import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PasswordPolicyType } from "./passwordpolicytype";


// UserPoolPolicyType
/** 
 * The policy associated with a user pool.
**/
export class UserPoolPolicyType extends SpeakeasyBase {
  @Metadata({ data: "json, name=PasswordPolicy" })
  passwordPolicy?: PasswordPolicyType;
}
