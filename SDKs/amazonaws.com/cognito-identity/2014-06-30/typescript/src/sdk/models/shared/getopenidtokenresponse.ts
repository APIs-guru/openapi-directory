import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetOpenIdTokenResponse
/** 
 * Returned in response to a successful GetOpenIdToken request.
**/
export class GetOpenIdTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId?: string;

  @SpeakeasyMetadata({ data: "json, name=Token" })
  token?: string;
}
