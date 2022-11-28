import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetOpenIdTokenForDeveloperIdentityInput
/** 
 * Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action.
**/
export class GetOpenIdTokenForDeveloperIdentityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityPoolId" })
  identityPoolId: string;

  @SpeakeasyMetadata({ data: "json, name=Logins" })
  logins: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=PrincipalTags" })
  principalTags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=TokenDuration" })
  tokenDuration?: number;
}
