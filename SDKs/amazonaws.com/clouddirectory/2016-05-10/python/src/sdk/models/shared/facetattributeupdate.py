from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import updateactiontype_enum
from . import facetattribute


@dataclass_json
@dataclass
class FacetAttributeUpdate:
    action: Optional[updateactiontype_enum.UpdateActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    attribute: Optional[facetattribute.FacetAttribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attribute' }})
    
