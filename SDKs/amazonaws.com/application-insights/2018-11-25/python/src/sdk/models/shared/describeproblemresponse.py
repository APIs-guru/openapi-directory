from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import problem


@dataclass_json
@dataclass
class DescribeProblemResponse:
    problem: Optional[problem.Problem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Problem' }})
    
