from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import batchaddfacettoobject
from . import batchattachobject
from . import batchattachpolicy
from . import batchattachtoindex
from . import batchattachtypedlink
from . import batchcreateindex
from . import batchcreateobject
from . import batchdeleteobject
from . import batchdetachfromindex
from . import batchdetachobject
from . import batchdetachpolicy
from . import batchdetachtypedlink
from . import batchremovefacetfromobject
from . import batchupdatelinkattributes
from . import batchupdateobjectattributes


@dataclass_json
@dataclass
class BatchWriteOperation:
    add_facet_to_object: Optional[batchaddfacettoobject.BatchAddFacetToObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddFacetToObject' }})
    attach_object: Optional[batchattachobject.BatchAttachObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachObject' }})
    attach_policy: Optional[batchattachpolicy.BatchAttachPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachPolicy' }})
    attach_to_index: Optional[batchattachtoindex.BatchAttachToIndex] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachToIndex' }})
    attach_typed_link: Optional[batchattachtypedlink.BatchAttachTypedLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachTypedLink' }})
    create_index: Optional[batchcreateindex.BatchCreateIndex] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateIndex' }})
    create_object: Optional[batchcreateobject.BatchCreateObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateObject' }})
    delete_object: Optional[batchdeleteobject.BatchDeleteObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteObject' }})
    detach_from_index: Optional[batchdetachfromindex.BatchDetachFromIndex] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetachFromIndex' }})
    detach_object: Optional[batchdetachobject.BatchDetachObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetachObject' }})
    detach_policy: Optional[batchdetachpolicy.BatchDetachPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetachPolicy' }})
    detach_typed_link: Optional[batchdetachtypedlink.BatchDetachTypedLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetachTypedLink' }})
    remove_facet_from_object: Optional[batchremovefacetfromobject.BatchRemoveFacetFromObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoveFacetFromObject' }})
    update_link_attributes: Optional[batchupdatelinkattributes.BatchUpdateLinkAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateLinkAttributes' }})
    update_object_attributes: Optional[batchupdateobjectattributes.BatchUpdateObjectAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateObjectAttributes' }})
    
