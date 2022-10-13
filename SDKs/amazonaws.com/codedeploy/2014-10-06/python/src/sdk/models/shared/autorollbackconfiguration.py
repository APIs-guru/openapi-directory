from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import autorollbackevent_enum


@dataclass_json
@dataclass
class AutoRollbackConfiguration:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    events: Optional[List[autorollbackevent_enum.AutoRollbackEventEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    
