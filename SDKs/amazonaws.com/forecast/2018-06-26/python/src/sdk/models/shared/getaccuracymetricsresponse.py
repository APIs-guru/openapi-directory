from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import automloverridestrategy_enum
from . import optimizationmetric_enum
from . import evaluationresult


@dataclass_json
@dataclass
class GetAccuracyMetricsResponse:
    auto_ml_override_strategy: Optional[automloverridestrategy_enum.AutoMlOverrideStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLOverrideStrategy' }})
    optimization_metric: Optional[optimizationmetric_enum.OptimizationMetricEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptimizationMetric' }})
    predictor_evaluation_results: Optional[List[evaluationresult.EvaluationResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictorEvaluationResults' }})
    
