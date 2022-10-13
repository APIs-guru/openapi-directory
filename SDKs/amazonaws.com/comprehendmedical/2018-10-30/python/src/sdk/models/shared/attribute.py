from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import entitytype_enum
from . import relationshiptype_enum
from . import trait
from . import entitysubtype_enum


@dataclass_json
@dataclass
class Attribute:
    begin_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BeginOffset' }})
    category: Optional[entitytype_enum.EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Category' }})
    end_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndOffset' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    relationship_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelationshipScore' }})
    relationship_type: Optional[relationshiptype_enum.RelationshipTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelationshipType' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Score' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    traits: Optional[List[trait.Trait]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Traits' }})
    type: Optional[entitysubtype_enum.EntitySubTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
