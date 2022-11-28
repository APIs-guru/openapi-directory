import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// BatchReadSuccessfulResponse
/** 
 * Represents the output of a <code>BatchRead</code> success response operation.
**/
export class BatchReadSuccessfulResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GetLinkAttributes" })
  getLinkAttributes?: BatchGetLinkAttributesResponse;

  @SpeakeasyMetadata({ data: "json, name=GetObjectAttributes" })
  getObjectAttributes?: BatchGetObjectAttributesResponse;

  @SpeakeasyMetadata({ data: "json, name=GetObjectInformation" })
  getObjectInformation?: BatchGetObjectInformationResponse;

  @SpeakeasyMetadata({ data: "json, name=ListAttachedIndices" })
  listAttachedIndices?: BatchListAttachedIndicesResponse;

  @SpeakeasyMetadata({ data: "json, name=ListIncomingTypedLinks" })
  listIncomingTypedLinks?: BatchListIncomingTypedLinksResponse;

  @SpeakeasyMetadata({ data: "json, name=ListIndex" })
  listIndex?: BatchListIndexResponse;

  @SpeakeasyMetadata({ data: "json, name=ListObjectAttributes" })
  listObjectAttributes?: BatchListObjectAttributesResponse;

  @SpeakeasyMetadata({ data: "json, name=ListObjectChildren" })
  listObjectChildren?: BatchListObjectChildrenResponse;

  @SpeakeasyMetadata({ data: "json, name=ListObjectParentPaths" })
  listObjectParentPaths?: BatchListObjectParentPathsResponse;

  @SpeakeasyMetadata({ data: "json, name=ListObjectParents" })
  listObjectParents?: BatchListObjectParentsResponse;

  @SpeakeasyMetadata({ data: "json, name=ListObjectPolicies" })
  listObjectPolicies?: BatchListObjectPoliciesResponse;

  @SpeakeasyMetadata({ data: "json, name=ListOutgoingTypedLinks" })
  listOutgoingTypedLinks?: BatchListOutgoingTypedLinksResponse;

  @SpeakeasyMetadata({ data: "json, name=ListPolicyAttachments" })
  listPolicyAttachments?: BatchListPolicyAttachmentsResponse;

  @SpeakeasyMetadata({ data: "json, name=LookupPolicy" })
  lookupPolicy?: BatchLookupPolicyResponse;
}
