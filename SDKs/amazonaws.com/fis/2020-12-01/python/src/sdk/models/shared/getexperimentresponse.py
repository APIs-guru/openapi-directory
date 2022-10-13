from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import experiment


@dataclass_json
@dataclass
class GetExperimentResponse:
    experiment: Optional[experiment.Experiment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experiment' }})
    
