import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetOpenIdTokenForDeveloperIdentityResponse
/** 
 * Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request.
**/
export class GetOpenIdTokenForDeveloperIdentityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @Metadata({ data: "json, name=Token" })
  token?: string;
}
