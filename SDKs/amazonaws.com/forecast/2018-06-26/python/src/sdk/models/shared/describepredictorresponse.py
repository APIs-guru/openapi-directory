from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribePredictorResponse:
    algorithm_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmArn') }})
    auto_ml_algorithm_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLAlgorithmArns') }})
    auto_ml_override_strategy: Optional[AutoMlOverrideStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLOverrideStrategy') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dataset_import_job_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetImportJobArns') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfig') }})
    estimated_time_remaining_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EstimatedTimeRemainingInMinutes') }})
    evaluation_parameters: Optional[EvaluationParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationParameters') }})
    featurization_config: Optional[FeaturizationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeaturizationConfig') }})
    forecast_horizon: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForecastHorizon') }})
    forecast_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForecastTypes') }})
    hpo_config: Optional[HyperParameterTuningJobConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HPOConfig') }})
    input_data_config: Optional[InputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    last_modification_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModificationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    optimization_metric: Optional[OptimizationMetricEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptimizationMetric') }})
    perform_auto_ml: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerformAutoML') }})
    perform_hpo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerformHPO') }})
    predictor_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorArn') }})
    predictor_execution_details: Optional[PredictorExecutionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorExecutionDetails') }})
    predictor_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorName') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    training_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingParameters') }})
    
