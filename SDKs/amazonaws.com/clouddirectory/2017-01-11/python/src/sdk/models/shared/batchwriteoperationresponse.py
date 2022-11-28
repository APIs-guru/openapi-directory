from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchWriteOperationResponse:
    r"""BatchWriteOperationResponse
    Represents the output of a <code>BatchWrite</code> response operation.
    """
    
    add_facet_to_object: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddFacetToObject') }})
    attach_object: Optional[BatchAttachObjectResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachObject') }})
    attach_policy: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachPolicy') }})
    attach_to_index: Optional[BatchAttachToIndexResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachToIndex') }})
    attach_typed_link: Optional[BatchAttachTypedLinkResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachTypedLink') }})
    create_index: Optional[BatchCreateIndexResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateIndex') }})
    create_object: Optional[BatchCreateObjectResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateObject') }})
    delete_object: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteObject') }})
    detach_from_index: Optional[BatchDetachFromIndexResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachFromIndex') }})
    detach_object: Optional[BatchDetachObjectResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachObject') }})
    detach_policy: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachPolicy') }})
    detach_typed_link: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachTypedLink') }})
    remove_facet_from_object: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoveFacetFromObject') }})
    update_link_attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateLinkAttributes') }})
    update_object_attributes: Optional[BatchUpdateObjectAttributesResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateObjectAttributes') }})
    
