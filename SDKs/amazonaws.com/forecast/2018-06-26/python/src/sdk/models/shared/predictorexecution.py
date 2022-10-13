from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import testwindowsummary


@dataclass_json
@dataclass
class PredictorExecution:
    algorithm_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmArn' }})
    test_windows: Optional[List[testwindowsummary.TestWindowSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TestWindows' }})
    
