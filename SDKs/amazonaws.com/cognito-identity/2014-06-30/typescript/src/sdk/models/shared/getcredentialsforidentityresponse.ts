import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Credentials } from "./credentials";



// GetCredentialsForIdentityResponse
/** 
 * Returned in response to a successful <code>GetCredentialsForIdentity</code> operation.
**/
export class GetCredentialsForIdentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Credentials" })
  credentials?: Credentials;

  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId?: string;
}
