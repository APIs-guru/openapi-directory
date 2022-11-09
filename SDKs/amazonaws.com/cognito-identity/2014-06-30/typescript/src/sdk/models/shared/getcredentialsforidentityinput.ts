import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetCredentialsForIdentityInput
/** 
 * Input to the <code>GetCredentialsForIdentity</code> action.
**/
export class GetCredentialsForIdentityInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomRoleArn" })
  customRoleArn?: string;

  @Metadata({ data: "json, name=IdentityId" })
  identityId: string;

  @Metadata({ data: "json, name=Logins" })
  logins?: Map<string, string>;
}
