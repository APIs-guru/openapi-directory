from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Icd10CmEntity:
    r"""Icd10CmEntity
    The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned. 
    """
    
    attributes: Optional[List[Icd10CmAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    begin_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeginOffset') }})
    category: Optional[Icd10CmEntityCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    end_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndOffset') }})
    icd10_cm_concepts: Optional[List[Icd10CmConcept]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ICD10CMConcepts') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Score') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    traits: Optional[List[Icd10CmTrait]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Traits') }})
    type: Optional[Icd10CmEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
