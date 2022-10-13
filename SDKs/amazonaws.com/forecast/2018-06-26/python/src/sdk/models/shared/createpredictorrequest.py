from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import automloverridestrategy_enum
from . import encryptionconfig
from . import evaluationparameters
from . import featurizationconfig
from . import hyperparametertuningjobconfig
from . import inputdataconfig
from . import optimizationmetric_enum
from . import tag


@dataclass_json
@dataclass
class CreatePredictorRequest:
    algorithm_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmArn' }})
    auto_ml_override_strategy: Optional[automloverridestrategy_enum.AutoMlOverrideStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLOverrideStrategy' }})
    encryption_config: Optional[encryptionconfig.EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionConfig' }})
    evaluation_parameters: Optional[evaluationparameters.EvaluationParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationParameters' }})
    featurization_config: featurizationconfig.FeaturizationConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeaturizationConfig' }})
    forecast_horizon: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastHorizon' }})
    forecast_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastTypes' }})
    hpo_config: Optional[hyperparametertuningjobconfig.HyperParameterTuningJobConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HPOConfig' }})
    input_data_config: inputdataconfig.InputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    optimization_metric: Optional[optimizationmetric_enum.OptimizationMetricEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptimizationMetric' }})
    perform_auto_ml: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PerformAutoML' }})
    perform_hpo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PerformHPO' }})
    predictor_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictorName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    training_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingParameters' }})
    
