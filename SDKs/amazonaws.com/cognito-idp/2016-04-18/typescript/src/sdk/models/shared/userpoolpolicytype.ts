import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PasswordPolicyType } from "./passwordpolicytype";



// UserPoolPolicyType
/** 
 * The policy associated with a user pool.
**/
export class UserPoolPolicyType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PasswordPolicy" })
  passwordPolicy?: PasswordPolicyType;
}
