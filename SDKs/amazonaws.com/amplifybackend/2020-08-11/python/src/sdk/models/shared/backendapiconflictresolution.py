from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resolutionstrategy_enum


@dataclass_json
@dataclass
class BackendAPIConflictResolution:
    resolution_strategy: Optional[resolutionstrategy_enum.ResolutionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResolutionStrategy' }})
    
