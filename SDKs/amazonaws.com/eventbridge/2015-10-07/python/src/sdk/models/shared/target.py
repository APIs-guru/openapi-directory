from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import batchparameters
from . import deadletterconfig
from . import ecsparameters
from . import httpparameters
from . import inputtransformer
from . import kinesisparameters
from . import redshiftdataparameters
from . import retrypolicy
from . import runcommandparameters
from . import sagemakerpipelineparameters
from . import sqsparameters


@dataclass_json
@dataclass
class Target:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    batch_parameters: Optional[batchparameters.BatchParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchParameters' }})
    dead_letter_config: Optional[deadletterconfig.DeadLetterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeadLetterConfig' }})
    ecs_parameters: Optional[ecsparameters.EcsParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EcsParameters' }})
    http_parameters: Optional[httpparameters.HTTPParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HttpParameters' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Input' }})
    input_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputPath' }})
    input_transformer: Optional[inputtransformer.InputTransformer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputTransformer' }})
    kinesis_parameters: Optional[kinesisparameters.KinesisParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisParameters' }})
    redshift_data_parameters: Optional[redshiftdataparameters.RedshiftDataParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RedshiftDataParameters' }})
    retry_policy: Optional[retrypolicy.RetryPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryPolicy' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    run_command_parameters: Optional[runcommandparameters.RunCommandParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunCommandParameters' }})
    sage_maker_pipeline_parameters: Optional[sagemakerpipelineparameters.SageMakerPipelineParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SageMakerPipelineParameters' }})
    sqs_parameters: Optional[sqsparameters.SqsParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SqsParameters' }})
    
