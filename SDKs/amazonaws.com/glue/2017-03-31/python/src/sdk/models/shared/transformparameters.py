from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import findmatchesparameters
from . import transformtype_enum


@dataclass_json
@dataclass
class TransformParameters:
    find_matches_parameters: Optional[findmatchesparameters.FindMatchesParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FindMatchesParameters' }})
    transform_type: transformtype_enum.TransformTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformType' }})
    
