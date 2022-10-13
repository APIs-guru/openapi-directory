from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import rxnormtrait
from . import rxnormattributetype_enum


@dataclass_json
@dataclass
class RxNormAttribute:
    begin_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BeginOffset' }})
    end_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndOffset' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    relationship_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelationshipScore' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Score' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    traits: Optional[List[rxnormtrait.RxNormTrait]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Traits' }})
    type: Optional[rxnormattributetype_enum.RxNormAttributeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
