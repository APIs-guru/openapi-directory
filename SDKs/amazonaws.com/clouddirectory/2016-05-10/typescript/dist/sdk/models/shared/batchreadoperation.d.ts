import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetLinkAttributes } from "./batchgetlinkattributes";
import { BatchGetObjectAttributes } from "./batchgetobjectattributes";
import { BatchGetObjectInformation } from "./batchgetobjectinformation";
import { BatchListAttachedIndices } from "./batchlistattachedindices";
import { BatchListIncomingTypedLinks } from "./batchlistincomingtypedlinks";
import { BatchListIndex } from "./batchlistindex";
import { BatchListObjectAttributes } from "./batchlistobjectattributes";
import { BatchListObjectChildren } from "./batchlistobjectchildren";
import { BatchListObjectParentPaths } from "./batchlistobjectparentpaths";
import { BatchListObjectPolicies } from "./batchlistobjectpolicies";
import { BatchListOutgoingTypedLinks } from "./batchlistoutgoingtypedlinks";
import { BatchListPolicyAttachments } from "./batchlistpolicyattachments";
import { BatchLookupPolicy } from "./batchlookuppolicy";
/**
 * Represents the output of a <code>BatchRead</code> operation.
**/
export declare class BatchReadOperation extends SpeakeasyBase {
    getLinkAttributes?: BatchGetLinkAttributes;
    getObjectAttributes?: BatchGetObjectAttributes;
    getObjectInformation?: BatchGetObjectInformation;
    listAttachedIndices?: BatchListAttachedIndices;
    listIncomingTypedLinks?: BatchListIncomingTypedLinks;
    listIndex?: BatchListIndex;
    listObjectAttributes?: BatchListObjectAttributes;
    listObjectChildren?: BatchListObjectChildren;
    listObjectParentPaths?: BatchListObjectParentPaths;
    listObjectPolicies?: BatchListObjectPolicies;
    listOutgoingTypedLinks?: BatchListOutgoingTypedLinks;
    listPolicyAttachments?: BatchListPolicyAttachments;
    lookupPolicy?: BatchLookupPolicy;
}
