import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PasswordPolicy
/** 
 * <p>Contains information about the account password policy.</p> <p> This data type is used as a response element in the <a>GetAccountPasswordPolicy</a> operation. </p>
**/
export class PasswordPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowUsersToChangePassword?: boolean;

  @SpeakeasyMetadata()
  expirePasswords?: boolean;

  @SpeakeasyMetadata()
  hardExpiry?: boolean;

  @SpeakeasyMetadata()
  maxPasswordAge?: number;

  @SpeakeasyMetadata()
  minimumPasswordLength?: number;

  @SpeakeasyMetadata()
  passwordReusePrevention?: number;

  @SpeakeasyMetadata()
  requireLowercaseCharacters?: boolean;

  @SpeakeasyMetadata()
  requireNumbers?: boolean;

  @SpeakeasyMetadata()
  requireSymbols?: boolean;

  @SpeakeasyMetadata()
  requireUppercaseCharacters?: boolean;
}
