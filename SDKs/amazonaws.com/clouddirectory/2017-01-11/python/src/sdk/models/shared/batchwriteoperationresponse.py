from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import batchattachobjectresponse
from . import batchattachtoindexresponse
from . import batchattachtypedlinkresponse
from . import batchcreateindexresponse
from . import batchcreateobjectresponse
from . import batchdetachfromindexresponse
from . import batchdetachobjectresponse
from . import batchupdateobjectattributesresponse


@dataclass_json
@dataclass
class BatchWriteOperationResponse:
    add_facet_to_object: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddFacetToObject' }})
    attach_object: Optional[batchattachobjectresponse.BatchAttachObjectResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachObject' }})
    attach_policy: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachPolicy' }})
    attach_to_index: Optional[batchattachtoindexresponse.BatchAttachToIndexResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachToIndex' }})
    attach_typed_link: Optional[batchattachtypedlinkresponse.BatchAttachTypedLinkResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachTypedLink' }})
    create_index: Optional[batchcreateindexresponse.BatchCreateIndexResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateIndex' }})
    create_object: Optional[batchcreateobjectresponse.BatchCreateObjectResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateObject' }})
    delete_object: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteObject' }})
    detach_from_index: Optional[batchdetachfromindexresponse.BatchDetachFromIndexResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetachFromIndex' }})
    detach_object: Optional[batchdetachobjectresponse.BatchDetachObjectResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetachObject' }})
    detach_policy: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetachPolicy' }})
    detach_typed_link: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetachTypedLink' }})
    remove_facet_from_object: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoveFacetFromObject' }})
    update_link_attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateLinkAttributes' }})
    update_object_attributes: Optional[batchupdateobjectattributesresponse.BatchUpdateObjectAttributesResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateObjectAttributes' }})
    
