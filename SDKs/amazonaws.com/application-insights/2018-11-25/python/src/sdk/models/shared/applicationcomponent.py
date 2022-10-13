from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ostype_enum
from . import tier_enum


@dataclass_json
@dataclass
class ApplicationComponent:
    component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComponentName' }})
    component_remarks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComponentRemarks' }})
    detected_workload: Optional[dict[str, dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetectedWorkload' }})
    monitor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Monitor' }})
    os_type: Optional[ostype_enum.OsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OsType' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    tier: Optional[tier_enum.TierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tier' }})
    
