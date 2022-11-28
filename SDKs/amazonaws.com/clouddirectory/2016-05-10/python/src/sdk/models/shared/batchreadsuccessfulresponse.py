from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchReadSuccessfulResponse:
    r"""BatchReadSuccessfulResponse
    Represents the output of a <code>BatchRead</code> success response operation.
    """
    
    get_link_attributes: Optional[BatchGetLinkAttributesResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GetLinkAttributes') }})
    get_object_attributes: Optional[BatchGetObjectAttributesResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GetObjectAttributes') }})
    get_object_information: Optional[BatchGetObjectInformationResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GetObjectInformation') }})
    list_attached_indices: Optional[BatchListAttachedIndicesResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListAttachedIndices') }})
    list_incoming_typed_links: Optional[BatchListIncomingTypedLinksResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListIncomingTypedLinks') }})
    list_index: Optional[BatchListIndexResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListIndex') }})
    list_object_attributes: Optional[BatchListObjectAttributesResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectAttributes') }})
    list_object_children: Optional[BatchListObjectChildrenResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectChildren') }})
    list_object_parent_paths: Optional[BatchListObjectParentPathsResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectParentPaths') }})
    list_object_policies: Optional[BatchListObjectPoliciesResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListObjectPolicies') }})
    list_outgoing_typed_links: Optional[BatchListOutgoingTypedLinksResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListOutgoingTypedLinks') }})
    list_policy_attachments: Optional[BatchListPolicyAttachmentsResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListPolicyAttachments') }})
    lookup_policy: Optional[BatchLookupPolicyResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LookupPolicy') }})
    
