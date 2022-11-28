from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RxNormEntity:
    r"""RxNormEntity
    The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned. 
    """
    
    attributes: Optional[List[RxNormAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    begin_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeginOffset') }})
    category: Optional[RxNormEntityCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    end_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndOffset') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    rx_norm_concepts: Optional[List[RxNormConcept]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RxNormConcepts') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Score') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    traits: Optional[List[RxNormTrait]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Traits') }})
    type: Optional[RxNormEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
