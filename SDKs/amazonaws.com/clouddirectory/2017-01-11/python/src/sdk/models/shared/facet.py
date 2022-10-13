from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import facetstyle_enum
from . import objecttype_enum


@dataclass_json
@dataclass
class Facet:
    facet_style: Optional[facetstyle_enum.FacetStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FacetStyle' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    object_type: Optional[objecttype_enum.ObjectTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectType' }})
    
