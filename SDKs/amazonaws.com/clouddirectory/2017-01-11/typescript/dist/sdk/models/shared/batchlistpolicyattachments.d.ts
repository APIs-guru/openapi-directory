import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectReference } from "./objectreference";
/**
 * Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached inside a <a>BatchRead</a> operation. For more information, see <a>ListPolicyAttachments</a> and <a>BatchReadRequest$Operations</a>.
**/
export declare class BatchListPolicyAttachments extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    policyReference: ObjectReference;
}
