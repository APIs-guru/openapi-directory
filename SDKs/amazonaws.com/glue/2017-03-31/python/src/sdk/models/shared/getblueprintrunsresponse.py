from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import blueprintrun


@dataclass_json
@dataclass
class GetBlueprintRunsResponse:
    blueprint_runs: Optional[List[blueprintrun.BlueprintRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlueprintRuns' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
