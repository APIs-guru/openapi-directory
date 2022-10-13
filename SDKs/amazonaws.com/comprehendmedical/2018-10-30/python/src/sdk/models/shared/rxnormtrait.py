from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import rxnormtraitname_enum


@dataclass_json
@dataclass
class RxNormTrait:
    name: Optional[rxnormtraitname_enum.RxNormTraitNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Score' }})
    
