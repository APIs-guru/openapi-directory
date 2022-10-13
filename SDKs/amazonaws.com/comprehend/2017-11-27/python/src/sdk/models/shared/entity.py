from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import entitytype_enum


@dataclass_json
@dataclass
class Entity:
    begin_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BeginOffset' }})
    end_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndOffset' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Score' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    type: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
