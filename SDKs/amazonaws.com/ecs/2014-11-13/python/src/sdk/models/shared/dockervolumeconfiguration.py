from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import scope_enum


@dataclass_json
@dataclass
class DockerVolumeConfiguration:
    autoprovision: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoprovision' }})
    driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driver' }})
    driver_opts: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driverOpts' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    scope: Optional[scope_enum.ScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    
