from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import systemresourcelimits


@dataclass_json
@dataclass
class ComponentRunWith:
    posix_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posixUser' }})
    system_resource_limits: Optional[systemresourcelimits.SystemResourceLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemResourceLimits' }})
    
