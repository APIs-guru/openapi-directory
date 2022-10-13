from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import observation


@dataclass_json
@dataclass
class DescribeObservationResponse:
    observation: Optional[observation.Observation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Observation' }})
    
