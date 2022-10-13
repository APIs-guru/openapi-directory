from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import icd10cmattribute
from . import icd10cmentitycategory_enum
from . import icd10cmconcept
from . import icd10cmtrait
from . import icd10cmentitytype_enum


@dataclass_json
@dataclass
class Icd10CmEntity:
    attributes: Optional[List[icd10cmattribute.Icd10CmAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    begin_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BeginOffset' }})
    category: Optional[icd10cmentitycategory_enum.Icd10CmEntityCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Category' }})
    end_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndOffset' }})
    icd10_cm_concepts: Optional[List[icd10cmconcept.Icd10CmConcept]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ICD10CMConcepts' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Score' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    traits: Optional[List[icd10cmtrait.Icd10CmTrait]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Traits' }})
    type: Optional[icd10cmentitytype_enum.Icd10CmEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
