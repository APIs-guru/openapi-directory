from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import minimumhealthyhoststype_enum


@dataclass_json
@dataclass
class MinimumHealthyHosts:
    type: Optional[minimumhealthyhoststype_enum.MinimumHealthyHostsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
