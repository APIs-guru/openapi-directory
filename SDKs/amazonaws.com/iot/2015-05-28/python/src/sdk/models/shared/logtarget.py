from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import logtargettype_enum


@dataclass_json
@dataclass
class LogTarget:
    target_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetName' }})
    target_type: logtargettype_enum.LogTargetTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetType' }})
    
