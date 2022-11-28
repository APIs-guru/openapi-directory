import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnprocessedIdentityId } from "./unprocessedidentityid";



// DeleteIdentitiesResponse
/** 
 * Returned in response to a successful <code>DeleteIdentities</code> operation.
**/
export class DeleteIdentitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UnprocessedIdentityIds", elemType: UnprocessedIdentityId })
  unprocessedIdentityIds?: UnprocessedIdentityId[];
}
