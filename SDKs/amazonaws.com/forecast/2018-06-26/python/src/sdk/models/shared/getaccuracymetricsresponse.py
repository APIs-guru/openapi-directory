from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAccuracyMetricsResponse:
    auto_ml_override_strategy: Optional[AutoMlOverrideStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLOverrideStrategy') }})
    optimization_metric: Optional[OptimizationMetricEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptimizationMetric') }})
    predictor_evaluation_results: Optional[List[EvaluationResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorEvaluationResults') }})
    
