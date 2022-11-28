from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Icd10CmAttribute:
    r"""Icd10CmAttribute
    The detected attributes that relate to an entity. This includes an extracted segment of the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>, and <code>Acuity</code>.
    """
    
    begin_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeginOffset') }})
    category: Optional[Icd10CmEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    end_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndOffset') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    relationship_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelationshipScore') }})
    relationship_type: Optional[Icd10CmRelationshipTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelationshipType') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Score') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    traits: Optional[List[Icd10CmTrait]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Traits') }})
    type: Optional[Icd10CmAttributeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
