from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import evaluateonexit


@dataclass_json
@dataclass
class RetryStrategy:
    attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attempts' }})
    evaluate_on_exit: Optional[List[evaluateonexit.EvaluateOnExit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluateOnExit' }})
    
