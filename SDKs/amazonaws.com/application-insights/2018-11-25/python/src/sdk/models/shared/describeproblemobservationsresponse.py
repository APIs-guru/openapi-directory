from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import relatedobservations


@dataclass_json
@dataclass
class DescribeProblemObservationsResponse:
    related_observations: Optional[relatedobservations.RelatedObservations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelatedObservations' }})
    
