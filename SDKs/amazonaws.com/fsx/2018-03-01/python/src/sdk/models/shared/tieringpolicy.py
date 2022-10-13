from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tieringpolicyname_enum


@dataclass_json
@dataclass
class TieringPolicy:
    cooling_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CoolingPeriod' }})
    name: Optional[tieringpolicyname_enum.TieringPolicyNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
