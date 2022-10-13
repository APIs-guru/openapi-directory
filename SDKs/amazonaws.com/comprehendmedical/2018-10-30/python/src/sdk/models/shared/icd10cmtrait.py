from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import icd10cmtraitname_enum


@dataclass_json
@dataclass
class Icd10CmTrait:
    name: Optional[icd10cmtraitname_enum.Icd10CmTraitNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Score' }})
    
