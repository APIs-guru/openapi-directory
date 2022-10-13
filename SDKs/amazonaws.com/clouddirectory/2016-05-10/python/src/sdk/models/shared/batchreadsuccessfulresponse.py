from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchgetlinkattributesresponse
from . import batchgetobjectattributesresponse
from . import batchgetobjectinformationresponse
from . import batchlistattachedindicesresponse
from . import batchlistincomingtypedlinksresponse
from . import batchlistindexresponse
from . import batchlistobjectattributesresponse
from . import batchlistobjectchildrenresponse
from . import batchlistobjectparentpathsresponse
from . import batchlistobjectpoliciesresponse
from . import batchlistoutgoingtypedlinksresponse
from . import batchlistpolicyattachmentsresponse
from . import batchlookuppolicyresponse


@dataclass_json
@dataclass
class BatchReadSuccessfulResponse:
    get_link_attributes: Optional[batchgetlinkattributesresponse.BatchGetLinkAttributesResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GetLinkAttributes' }})
    get_object_attributes: Optional[batchgetobjectattributesresponse.BatchGetObjectAttributesResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GetObjectAttributes' }})
    get_object_information: Optional[batchgetobjectinformationresponse.BatchGetObjectInformationResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GetObjectInformation' }})
    list_attached_indices: Optional[batchlistattachedindicesresponse.BatchListAttachedIndicesResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListAttachedIndices' }})
    list_incoming_typed_links: Optional[batchlistincomingtypedlinksresponse.BatchListIncomingTypedLinksResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListIncomingTypedLinks' }})
    list_index: Optional[batchlistindexresponse.BatchListIndexResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListIndex' }})
    list_object_attributes: Optional[batchlistobjectattributesresponse.BatchListObjectAttributesResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListObjectAttributes' }})
    list_object_children: Optional[batchlistobjectchildrenresponse.BatchListObjectChildrenResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListObjectChildren' }})
    list_object_parent_paths: Optional[batchlistobjectparentpathsresponse.BatchListObjectParentPathsResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListObjectParentPaths' }})
    list_object_policies: Optional[batchlistobjectpoliciesresponse.BatchListObjectPoliciesResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListObjectPolicies' }})
    list_outgoing_typed_links: Optional[batchlistoutgoingtypedlinksresponse.BatchListOutgoingTypedLinksResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListOutgoingTypedLinks' }})
    list_policy_attachments: Optional[batchlistpolicyattachmentsresponse.BatchListPolicyAttachmentsResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListPolicyAttachments' }})
    lookup_policy: Optional[batchlookuppolicyresponse.BatchLookupPolicyResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookupPolicy' }})
    
