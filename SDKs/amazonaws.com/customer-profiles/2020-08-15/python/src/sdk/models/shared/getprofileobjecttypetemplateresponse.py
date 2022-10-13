from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import objecttypefield
from . import objecttypekey


@dataclass_json
@dataclass
class GetProfileObjectTypeTemplateResponse:
    allow_profile_creation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllowProfileCreation' }})
    fields: Optional[dict[str, objecttypefield.ObjectTypeField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Fields' }})
    keys: Optional[dict[str, List[objecttypekey.ObjectTypeKey]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keys' }})
    source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceName' }})
    source_object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceObject' }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateId' }})
    
