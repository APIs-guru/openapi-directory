from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import rxnormattribute
from . import rxnormentitycategory_enum
from . import rxnormconcept
from . import rxnormtrait
from . import rxnormentitytype_enum


@dataclass_json
@dataclass
class RxNormEntity:
    attributes: Optional[List[rxnormattribute.RxNormAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    begin_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BeginOffset' }})
    category: Optional[rxnormentitycategory_enum.RxNormEntityCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Category' }})
    end_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndOffset' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    rx_norm_concepts: Optional[List[rxnormconcept.RxNormConcept]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RxNormConcepts' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Score' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    traits: Optional[List[rxnormtrait.RxNormTrait]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Traits' }})
    type: Optional[rxnormentitytype_enum.RxNormEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
