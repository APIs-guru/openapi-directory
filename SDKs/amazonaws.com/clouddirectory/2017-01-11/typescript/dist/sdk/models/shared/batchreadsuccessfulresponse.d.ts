import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetLinkAttributesResponse } from "./batchgetlinkattributesresponse";
import { BatchGetObjectAttributesResponse } from "./batchgetobjectattributesresponse";
import { BatchGetObjectInformationResponse } from "./batchgetobjectinformationresponse";
import { BatchListAttachedIndicesResponse } from "./batchlistattachedindicesresponse";
import { BatchListIncomingTypedLinksResponse } from "./batchlistincomingtypedlinksresponse";
import { BatchListIndexResponse } from "./batchlistindexresponse";
import { BatchListObjectAttributesResponse } from "./batchlistobjectattributesresponse";
import { BatchListObjectChildrenResponse } from "./batchlistobjectchildrenresponse";
import { BatchListObjectParentPathsResponse } from "./batchlistobjectparentpathsresponse";
import { BatchListObjectParentsResponse } from "./batchlistobjectparentsresponse";
import { BatchListObjectPoliciesResponse } from "./batchlistobjectpoliciesresponse";
import { BatchListOutgoingTypedLinksResponse } from "./batchlistoutgoingtypedlinksresponse";
import { BatchListPolicyAttachmentsResponse } from "./batchlistpolicyattachmentsresponse";
import { BatchLookupPolicyResponse } from "./batchlookuppolicyresponse";
/**
 * Represents the output of a <code>BatchRead</code> success response operation.
**/
export declare class BatchReadSuccessfulResponse extends SpeakeasyBase {
    getLinkAttributes?: BatchGetLinkAttributesResponse;
    getObjectAttributes?: BatchGetObjectAttributesResponse;
    getObjectInformation?: BatchGetObjectInformationResponse;
    listAttachedIndices?: BatchListAttachedIndicesResponse;
    listIncomingTypedLinks?: BatchListIncomingTypedLinksResponse;
    listIndex?: BatchListIndexResponse;
    listObjectAttributes?: BatchListObjectAttributesResponse;
    listObjectChildren?: BatchListObjectChildrenResponse;
    listObjectParentPaths?: BatchListObjectParentPathsResponse;
    listObjectParents?: BatchListObjectParentsResponse;
    listObjectPolicies?: BatchListObjectPoliciesResponse;
    listOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse;
    listPolicyAttachments?: BatchListPolicyAttachmentsResponse;
    lookupPolicy?: BatchLookupPolicyResponse;
}
