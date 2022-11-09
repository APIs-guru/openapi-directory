import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetOpenIdTokenForDeveloperIdentityInput
/** 
 * Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action.
**/
export class GetOpenIdTokenForDeveloperIdentityInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @Metadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @Metadata({ data: "json, name=Logins" })
  logins: Map<string, string>;

  @Metadata({ data: "json, name=PrincipalTags" })
  principalTags?: Map<string, string>;

  @Metadata({ data: "json, name=TokenDuration" })
  tokenDuration?: number;
}
