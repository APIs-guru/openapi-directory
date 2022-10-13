from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import windowsummary


@dataclass_json
@dataclass
class EvaluationResult:
    algorithm_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmArn' }})
    test_windows: Optional[List[windowsummary.WindowSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TestWindows' }})
    
