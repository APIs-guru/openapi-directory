import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=GetLinkAttributes" })
  getLinkAttributes?: BatchGetLinkAttributes;

  @Metadata({ data: "json, name=GetObjectAttributes" })
  getObjectAttributes?: BatchGetObjectAttributes;

  @Metadata({ data: "json, name=GetObjectInformation" })
  getObjectInformation?: BatchGetObjectInformation;

  @Metadata({ data: "json, name=ListAttachedIndices" })
  listAttachedIndices?: BatchListAttachedIndices;

  @Metadata({ data: "json, name=ListIncomingTypedLinks" })
  listIncomingTypedLinks?: BatchListIncomingTypedLinks;

  @Metadata({ data: "json, name=ListIndex" })
  listIndex?: BatchListIndex;

  @Metadata({ data: "json, name=ListObjectAttributes" })
  listObjectAttributes?: BatchListObjectAttributes;

  @Metadata({ data: "json, name=ListObjectChildren" })
  listObjectChildren?: BatchListObjectChildren;

  @Metadata({ data: "json, name=ListObjectParentPaths" })
  listObjectParentPaths?: BatchListObjectParentPaths;

  @Metadata({ data: "json, name=ListObjectParents" })
  listObjectParents?: BatchListObjectParents;

  @Metadata({ data: "json, name=ListObjectPolicies" })
  listObjectPolicies?: BatchListObjectPolicies;

  @Metadata({ data: "json, name=ListOutgoingTypedLinks" })
  listOutgoingTypedLinks?: BatchListOutgoingTypedLinks;

  @Metadata({ data: "json, name=ListPolicyAttachments" })
  listPolicyAttachments?: BatchListPolicyAttachments;

  @Metadata({ data: "json, name=LookupPolicy" })
  lookupPolicy?: BatchLookupPolicy;
}
