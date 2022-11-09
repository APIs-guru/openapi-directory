import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PasswordPolicyType
/** 
 * The password policy type.
**/
export class PasswordPolicyType extends SpeakeasyBase {
  @Metadata({ data: "json, name=MinimumLength" })
  minimumLength?: number;

  @Metadata({ data: "json, name=RequireLowercase" })
  requireLowercase?: boolean;

  @Metadata({ data: "json, name=RequireNumbers" })
  requireNumbers?: boolean;

  @Metadata({ data: "json, name=RequireSymbols" })
  requireSymbols?: boolean;

  @Metadata({ data: "json, name=RequireUppercase" })
  requireUppercase?: boolean;

  @Metadata({ data: "json, name=TemporaryPasswordValidityDays" })
  temporaryPasswordValidityDays?: number;
}
