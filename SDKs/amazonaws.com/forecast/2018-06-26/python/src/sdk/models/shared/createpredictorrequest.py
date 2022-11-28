from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreatePredictorRequest:
    featurization_config: FeaturizationConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeaturizationConfig') }})
    forecast_horizon: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForecastHorizon') }})
    input_data_config: InputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    predictor_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorName') }})
    algorithm_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmArn') }})
    auto_ml_override_strategy: Optional[AutoMlOverrideStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLOverrideStrategy') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfig') }})
    evaluation_parameters: Optional[EvaluationParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationParameters') }})
    forecast_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForecastTypes') }})
    hpo_config: Optional[HyperParameterTuningJobConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HPOConfig') }})
    optimization_metric: Optional[OptimizationMetricEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptimizationMetric') }})
    perform_auto_ml: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerformAutoML') }})
    perform_hpo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerformHPO') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    training_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingParameters') }})
    
