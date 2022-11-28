from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchReadOperation:
    r"""BatchReadOperation
    Represents the output of a <code>BatchRead</code> operation.
    """
    
    get_link_attributes: Optional[BatchGetLinkAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GetLinkAttributes') }})
    get_object_attributes: Optional[BatchGetObjectAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GetObjectAttributes') }})
    get_object_information: Optional[BatchGetObjectInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GetObjectInformation') }})
    list_attached_indices: Optional[BatchListAttachedIndices] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListAttachedIndices') }})
    list_incoming_typed_links: Optional[BatchListIncomingTypedLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListIncomingTypedLinks') }})
    list_index: Optional[BatchListIndex] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListIndex') }})
    list_object_attributes: Optional[BatchListObjectAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectAttributes') }})
    list_object_children: Optional[BatchListObjectChildren] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectChildren') }})
    list_object_parent_paths: Optional[BatchListObjectParentPaths] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectParentPaths') }})
    list_object_policies: Optional[BatchListObjectPolicies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectPolicies') }})
    list_outgoing_typed_links: Optional[BatchListOutgoingTypedLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListOutgoingTypedLinks') }})
    list_policy_attachments: Optional[BatchListPolicyAttachments] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListPolicyAttachments') }})
    lookup_policy: Optional[BatchLookupPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LookupPolicy') }})
    
