import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetOpenIdTokenResponse
/** 
 * Returned in response to a successful GetOpenIdToken request.
**/
export class GetOpenIdTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @Metadata({ data: "json, name=Token" })
  token?: string;
}
