import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MergeDeveloperIdentitiesResponse
/** 
 * Returned in response to a successful <code>MergeDeveloperIdentities</code> action.
**/
export class MergeDeveloperIdentitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityId" })
  identityId?: string;
}
