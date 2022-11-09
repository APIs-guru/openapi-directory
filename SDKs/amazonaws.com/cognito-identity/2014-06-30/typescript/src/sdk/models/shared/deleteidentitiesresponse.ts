import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UnprocessedIdentityId } from "./unprocessedidentityid";


// DeleteIdentitiesResponse
/** 
 * Returned in response to a successful <code>DeleteIdentities</code> operation.
**/
export class DeleteIdentitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=UnprocessedIdentityIds", elemType: shared.UnprocessedIdentityId })
  unprocessedIdentityIds?: UnprocessedIdentityId[];
}
