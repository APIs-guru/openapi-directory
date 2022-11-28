from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Attribute:
    r"""Attribute
     An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text. 
    """
    
    begin_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeginOffset') }})
    category: Optional[EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    end_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndOffset') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    relationship_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelationshipScore') }})
    relationship_type: Optional[RelationshipTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelationshipType') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Score') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    traits: Optional[List[Trait]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Traits') }})
    type: Optional[EntitySubTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
