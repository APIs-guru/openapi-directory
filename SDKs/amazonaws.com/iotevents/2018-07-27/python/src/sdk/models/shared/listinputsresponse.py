from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inputsummary


@dataclass_json
@dataclass
class ListInputsResponse:
    input_summaries: Optional[List[inputsummary.InputSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
