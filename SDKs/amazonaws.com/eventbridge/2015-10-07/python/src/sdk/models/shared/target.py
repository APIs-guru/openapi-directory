from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Target:
    r"""Target
    <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see <a href=\"https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html\">PutTargets</a>.</p> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href=\"https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html\">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p>
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    batch_parameters: Optional[BatchParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchParameters') }})
    dead_letter_config: Optional[DeadLetterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeadLetterConfig') }})
    ecs_parameters: Optional[EcsParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EcsParameters') }})
    http_parameters: Optional[HTTPParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpParameters') }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Input') }})
    input_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputPath') }})
    input_transformer: Optional[InputTransformer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputTransformer') }})
    kinesis_parameters: Optional[KinesisParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisParameters') }})
    redshift_data_parameters: Optional[RedshiftDataParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedshiftDataParameters') }})
    retry_policy: Optional[RetryPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryPolicy') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    run_command_parameters: Optional[RunCommandParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunCommandParameters') }})
    sage_maker_pipeline_parameters: Optional[SageMakerPipelineParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SageMakerPipelineParameters') }})
    sqs_parameters: Optional[SqsParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SqsParameters') }})
    
