import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MergeDeveloperIdentitiesResponse
/** 
 * Returned in response to a successful <code>MergeDeveloperIdentities</code> action.
**/
export class MergeDeveloperIdentitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityId" })
  identityId?: string;
}
