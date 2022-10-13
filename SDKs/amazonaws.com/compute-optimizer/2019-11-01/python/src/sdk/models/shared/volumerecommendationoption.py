from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import volumeconfiguration


@dataclass_json
@dataclass
class VolumeRecommendationOption:
    configuration: Optional[volumeconfiguration.VolumeConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    performance_risk: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performanceRisk' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    
