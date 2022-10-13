from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resourceidentifier
from . import resourcetype_enum


@dataclass_json
@dataclass
class NonCompliantResource:
    additional_info: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalInfo' }})
    resource_identifier: Optional[resourceidentifier.ResourceIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceIdentifier' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
