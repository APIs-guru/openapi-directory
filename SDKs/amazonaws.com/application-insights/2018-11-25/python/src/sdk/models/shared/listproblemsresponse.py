from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import problem


@dataclass_json
@dataclass
class ListProblemsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    problem_list: Optional[List[problem.Problem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProblemList' }})
    
