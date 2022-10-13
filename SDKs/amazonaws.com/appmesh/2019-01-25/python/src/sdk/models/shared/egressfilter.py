from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import egressfiltertype_enum


@dataclass_json
@dataclass
class EgressFilter:
    type: egressfiltertype_enum.EgressFilterTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
