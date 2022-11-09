import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Credentials } from "./credentials";


// GetCredentialsForIdentityResponse
/** 
 * Returned in response to a successful <code>GetCredentialsForIdentity</code> operation.
**/
export class GetCredentialsForIdentityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Credentials" })
  credentials?: Credentials;

  @Metadata({ data: "json, name=IdentityId" })
  identityId?: string;
}
