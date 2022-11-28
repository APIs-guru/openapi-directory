from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchWriteOperation:
    r"""BatchWriteOperation
    Represents the output of a <code>BatchWrite</code> operation. 
    """
    
    add_facet_to_object: Optional[BatchAddFacetToObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddFacetToObject') }})
    attach_object: Optional[BatchAttachObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachObject') }})
    attach_policy: Optional[BatchAttachPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachPolicy') }})
    attach_to_index: Optional[BatchAttachToIndex] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachToIndex') }})
    attach_typed_link: Optional[BatchAttachTypedLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachTypedLink') }})
    create_index: Optional[BatchCreateIndex] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateIndex') }})
    create_object: Optional[BatchCreateObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateObject') }})
    delete_object: Optional[BatchDeleteObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteObject') }})
    detach_from_index: Optional[BatchDetachFromIndex] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachFromIndex') }})
    detach_object: Optional[BatchDetachObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachObject') }})
    detach_policy: Optional[BatchDetachPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachPolicy') }})
    detach_typed_link: Optional[BatchDetachTypedLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachTypedLink') }})
    remove_facet_from_object: Optional[BatchRemoveFacetFromObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoveFacetFromObject') }})
    update_link_attributes: Optional[BatchUpdateLinkAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateLinkAttributes') }})
    update_object_attributes: Optional[BatchUpdateObjectAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateObjectAttributes') }})
    
