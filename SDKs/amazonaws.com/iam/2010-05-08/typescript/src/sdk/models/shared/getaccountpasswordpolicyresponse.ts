import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PasswordPolicy } from "./passwordpolicy";



// GetAccountPasswordPolicyResponse
/** 
 * Contains the response to a successful <a>GetAccountPasswordPolicy</a> request. 
**/
export class GetAccountPasswordPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  passwordPolicy: PasswordPolicy;
}
