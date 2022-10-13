from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import logtype_enum


@dataclass_json
@dataclass
class LogSetup:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    types: Optional[List[logtype_enum.LogTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    
