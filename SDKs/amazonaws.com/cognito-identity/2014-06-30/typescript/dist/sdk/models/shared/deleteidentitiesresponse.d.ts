import { SpeakeasyBase } from "../../../internal/utils";
import { UnprocessedIdentityId } from "./unprocessedidentityid";
/**
 * Returned in response to a successful <code>DeleteIdentities</code> operation.
**/
export declare class DeleteIdentitiesResponse extends SpeakeasyBase {
    unprocessedIdentityIds?: UnprocessedIdentityId[];
}
