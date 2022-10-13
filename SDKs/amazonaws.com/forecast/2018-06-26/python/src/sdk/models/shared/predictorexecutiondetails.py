from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import predictorexecution


@dataclass_json
@dataclass
class PredictorExecutionDetails:
    predictor_executions: Optional[List[predictorexecution.PredictorExecution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictorExecutions' }})
    
