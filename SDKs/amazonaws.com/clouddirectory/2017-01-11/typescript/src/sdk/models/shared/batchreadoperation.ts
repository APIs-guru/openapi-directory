import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchGetLinkAttributes } from "./batchgetlinkattributes";
import { BatchGetObjectAttributes } from "./batchgetobjectattributes";
import { BatchGetObjectInformation } from "./batchgetobjectinformation";
import { BatchListAttachedIndices } from "./batchlistattachedindices";
import { BatchListIncomingTypedLinks } from "./batchlistincomingtypedlinks";
import { BatchListIndex } from "./batchlistindex";
import { BatchListObjectAttributes } from "./batchlistobjectattributes";
import { BatchListObjectChildren } from "./batchlistobjectchildren";
import { BatchListObjectParentPaths } from "./batchlistobjectparentpaths";
import { BatchListObjectParents } from "./batchlistobjectparents";
import { BatchListObjectPolicies } from "./batchlistobjectpolicies";
import { BatchListOutgoingTypedLinks } from "./batchlistoutgoingtypedlinks";
import { BatchListPolicyAttachments } from "./batchlistpolicyattachments";
import { BatchLookupPolicy } from "./batchlookuppolicy";



// BatchReadOperation
/** 
 * Represents the output of a <code>BatchRead</code> operation.
**/
export class BatchReadOperation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GetLinkAttributes" })
  getLinkAttributes?: BatchGetLinkAttributes;

  @SpeakeasyMetadata({ data: "json, name=GetObjectAttributes" })
  getObjectAttributes?: BatchGetObjectAttributes;

  @SpeakeasyMetadata({ data: "json, name=GetObjectInformation" })
  getObjectInformation?: BatchGetObjectInformation;

  @SpeakeasyMetadata({ data: "json, name=ListAttachedIndices" })
  listAttachedIndices?: BatchListAttachedIndices;

  @SpeakeasyMetadata({ data: "json, name=ListIncomingTypedLinks" })
  listIncomingTypedLinks?: BatchListIncomingTypedLinks;

  @SpeakeasyMetadata({ data: "json, name=ListIndex" })
  listIndex?: BatchListIndex;

  @SpeakeasyMetadata({ data: "json, name=ListObjectAttributes" })
  listObjectAttributes?: BatchListObjectAttributes;

  @SpeakeasyMetadata({ data: "json, name=ListObjectChildren" })
  listObjectChildren?: BatchListObjectChildren;

  @SpeakeasyMetadata({ data: "json, name=ListObjectParentPaths" })
  listObjectParentPaths?: BatchListObjectParentPaths;

  @SpeakeasyMetadata({ data: "json, name=ListObjectParents" })
  listObjectParents?: BatchListObjectParents;

  @SpeakeasyMetadata({ data: "json, name=ListObjectPolicies" })
  listObjectPolicies?: BatchListObjectPolicies;

  @SpeakeasyMetadata({ data: "json, name=ListOutgoingTypedLinks" })
  listOutgoingTypedLinks?: BatchListOutgoingTypedLinks;

  @SpeakeasyMetadata({ data: "json, name=ListPolicyAttachments" })
  listPolicyAttachments?: BatchListPolicyAttachments;

  @SpeakeasyMetadata({ data: "json, name=LookupPolicy" })
  lookupPolicy?: BatchLookupPolicy;
}
