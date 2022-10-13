from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import uniqueproblem


@dataclass_json
@dataclass
class ListUniqueProblemsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    unique_problems: Optional[dict[str, List[uniqueproblem.UniqueProblem]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniqueProblems' }})
    
