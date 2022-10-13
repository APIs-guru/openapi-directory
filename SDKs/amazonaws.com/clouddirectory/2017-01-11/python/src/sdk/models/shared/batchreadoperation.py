from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchgetlinkattributes
from . import batchgetobjectattributes
from . import batchgetobjectinformation
from . import batchlistattachedindices
from . import batchlistincomingtypedlinks
from . import batchlistindex
from . import batchlistobjectattributes
from . import batchlistobjectchildren
from . import batchlistobjectparentpaths
from . import batchlistobjectparents
from . import batchlistobjectpolicies
from . import batchlistoutgoingtypedlinks
from . import batchlistpolicyattachments
from . import batchlookuppolicy


@dataclass_json
@dataclass
class BatchReadOperation:
    get_link_attributes: Optional[batchgetlinkattributes.BatchGetLinkAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GetLinkAttributes' }})
    get_object_attributes: Optional[batchgetobjectattributes.BatchGetObjectAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GetObjectAttributes' }})
    get_object_information: Optional[batchgetobjectinformation.BatchGetObjectInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GetObjectInformation' }})
    list_attached_indices: Optional[batchlistattachedindices.BatchListAttachedIndices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListAttachedIndices' }})
    list_incoming_typed_links: Optional[batchlistincomingtypedlinks.BatchListIncomingTypedLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListIncomingTypedLinks' }})
    list_index: Optional[batchlistindex.BatchListIndex] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListIndex' }})
    list_object_attributes: Optional[batchlistobjectattributes.BatchListObjectAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListObjectAttributes' }})
    list_object_children: Optional[batchlistobjectchildren.BatchListObjectChildren] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListObjectChildren' }})
    list_object_parent_paths: Optional[batchlistobjectparentpaths.BatchListObjectParentPaths] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListObjectParentPaths' }})
    list_object_parents: Optional[batchlistobjectparents.BatchListObjectParents] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListObjectParents' }})
    list_object_policies: Optional[batchlistobjectpolicies.BatchListObjectPolicies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListObjectPolicies' }})
    list_outgoing_typed_links: Optional[batchlistoutgoingtypedlinks.BatchListOutgoingTypedLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListOutgoingTypedLinks' }})
    list_policy_attachments: Optional[batchlistpolicyattachments.BatchListPolicyAttachments] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListPolicyAttachments' }})
    lookup_policy: Optional[batchlookuppolicy.BatchLookupPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LookupPolicy' }})
    
