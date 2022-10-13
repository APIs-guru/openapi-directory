from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import automloverridestrategy_enum
from . import encryptionconfig
from . import evaluationparameters
from . import featurizationconfig
from . import hyperparametertuningjobconfig
from . import inputdataconfig
from . import optimizationmetric_enum
from . import predictorexecutiondetails


@dataclass_json
@dataclass
class DescribePredictorResponse:
    algorithm_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmArn' }})
    auto_ml_algorithm_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLAlgorithmArns' }})
    auto_ml_override_strategy: Optional[automloverridestrategy_enum.AutoMlOverrideStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoMLOverrideStrategy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_import_job_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetImportJobArns' }})
    encryption_config: Optional[encryptionconfig.EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionConfig' }})
    estimated_time_remaining_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EstimatedTimeRemainingInMinutes' }})
    evaluation_parameters: Optional[evaluationparameters.EvaluationParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationParameters' }})
    featurization_config: Optional[featurizationconfig.FeaturizationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FeaturizationConfig' }})
    forecast_horizon: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastHorizon' }})
    forecast_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastTypes' }})
    hpo_config: Optional[hyperparametertuningjobconfig.HyperParameterTuningJobConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HPOConfig' }})
    input_data_config: Optional[inputdataconfig.InputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModificationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    optimization_metric: Optional[optimizationmetric_enum.OptimizationMetricEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptimizationMetric' }})
    perform_auto_ml: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PerformAutoML' }})
    perform_hpo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PerformHPO' }})
    predictor_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictorArn' }})
    predictor_execution_details: Optional[predictorexecutiondetails.PredictorExecutionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictorExecutionDetails' }})
    predictor_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PredictorName' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    training_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingParameters' }})
    
