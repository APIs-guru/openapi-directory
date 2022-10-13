from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import experimentsummary


@dataclass_json
@dataclass
class ListExperimentsResponse:
    experiments: Optional[List[experimentsummary.ExperimentSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experiments' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
