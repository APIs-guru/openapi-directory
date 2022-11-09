import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchGetLinkAttributesResponse } from "./batchgetlinkattributesresponse";
import { BatchGetObjectAttributesResponse } from "./batchgetobjectattributesresponse";
import { BatchGetObjectInformationResponse } from "./batchgetobjectinformationresponse";
import { BatchListAttachedIndicesResponse } from "./batchlistattachedindicesresponse";
import { BatchListIncomingTypedLinksResponse } from "./batchlistincomingtypedlinksresponse";
import { BatchListIndexResponse } from "./batchlistindexresponse";
import { BatchListObjectAttributesResponse } from "./batchlistobjectattributesresponse";
import { BatchListObjectChildrenResponse } from "./batchlistobjectchildrenresponse";
import { BatchListObjectParentPathsResponse } from "./batchlistobjectparentpathsresponse";
import { BatchListObjectPoliciesResponse } from "./batchlistobjectpoliciesresponse";
import { BatchListOutgoingTypedLinksResponse } from "./batchlistoutgoingtypedlinksresponse";
import { BatchListPolicyAttachmentsResponse } from "./batchlistpolicyattachmentsresponse";
import { BatchLookupPolicyResponse } from "./batchlookuppolicyresponse";


// BatchReadSuccessfulResponse
/** 
 * Represents the output of a <code>BatchRead</code> success response operation.
**/
export class BatchReadSuccessfulResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=GetLinkAttributes" })
  getLinkAttributes?: BatchGetLinkAttributesResponse;

  @Metadata({ data: "json, name=GetObjectAttributes" })
  getObjectAttributes?: BatchGetObjectAttributesResponse;

  @Metadata({ data: "json, name=GetObjectInformation" })
  getObjectInformation?: BatchGetObjectInformationResponse;

  @Metadata({ data: "json, name=ListAttachedIndices" })
  listAttachedIndices?: BatchListAttachedIndicesResponse;

  @Metadata({ data: "json, name=ListIncomingTypedLinks" })
  listIncomingTypedLinks?: BatchListIncomingTypedLinksResponse;

  @Metadata({ data: "json, name=ListIndex" })
  listIndex?: BatchListIndexResponse;

  @Metadata({ data: "json, name=ListObjectAttributes" })
  listObjectAttributes?: BatchListObjectAttributesResponse;

  @Metadata({ data: "json, name=ListObjectChildren" })
  listObjectChildren?: BatchListObjectChildrenResponse;

  @Metadata({ data: "json, name=ListObjectParentPaths" })
  listObjectParentPaths?: BatchListObjectParentPathsResponse;

  @Metadata({ data: "json, name=ListObjectPolicies" })
  listObjectPolicies?: BatchListObjectPoliciesResponse;

  @Metadata({ data: "json, name=ListOutgoingTypedLinks" })
  listOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse;

  @Metadata({ data: "json, name=ListPolicyAttachments" })
  listPolicyAttachments?: BatchListPolicyAttachmentsResponse;

  @Metadata({ data: "json, name=LookupPolicy" })
  lookupPolicy?: BatchLookupPolicyResponse;
}
