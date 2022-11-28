import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetOpenIdTokenForDeveloperIdentityResponse
/** 
 * Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request.
**/
export class GetOpenIdTokenForDeveloperIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @SpeakeasyMetadata({ data: "json, name=Token" })
  token?: string;
}
