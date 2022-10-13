from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import projectiontype_enum


@dataclass_json
@dataclass
class Projection:
    non_key_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonKeyAttributes' }})
    projection_type: Optional[projectiontype_enum.ProjectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectionType' }})
    
