from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import icd10cmentitytype_enum
from . import icd10cmrelationshiptype_enum
from . import icd10cmtrait
from . import icd10cmattributetype_enum


@dataclass_json
@dataclass
class Icd10CmAttribute:
    begin_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BeginOffset' }})
    category: Optional[icd10cmentitytype_enum.Icd10CmEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Category' }})
    end_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndOffset' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    relationship_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelationshipScore' }})
    relationship_type: Optional[icd10cmrelationshiptype_enum.Icd10CmRelationshipTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelationshipType' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Score' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Text' }})
    traits: Optional[List[icd10cmtrait.Icd10CmTrait]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Traits' }})
    type: Optional[icd10cmattributetype_enum.Icd10CmAttributeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
