from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import criticality_enum


@dataclass_json
@dataclass
class TrackingConfig:
    autotrack: criticality_enum.CriticalityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autotrack' }})
    
