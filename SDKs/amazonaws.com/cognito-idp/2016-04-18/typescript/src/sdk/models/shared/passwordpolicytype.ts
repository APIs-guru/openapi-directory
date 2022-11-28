import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PasswordPolicyType
/** 
 * The password policy type.
**/
export class PasswordPolicyType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MinimumLength" })
  minimumLength?: number;

  @SpeakeasyMetadata({ data: "json, name=RequireLowercase" })
  requireLowercase?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequireNumbers" })
  requireNumbers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequireSymbols" })
  requireSymbols?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequireUppercase" })
  requireUppercase?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TemporaryPasswordValidityDays" })
  temporaryPasswordValidityDays?: number;
}
