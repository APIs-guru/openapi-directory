from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RegisterJobDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RegisterJobDefinitionRequestBodyContainerProperties:
    r"""RegisterJobDefinitionRequestBodyContainerProperties
    Container properties are used in job definitions to describe the container that's launched as part of a job.
    """
    
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    environment: Optional[List[shared.KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionRoleArn') }})
    fargate_platform_configuration: Optional[shared.FargatePlatformConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fargatePlatformConfiguration') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceType') }})
    job_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobRoleArn') }})
    linux_parameters: Optional[shared.LinuxParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linuxParameters') }})
    log_configuration: Optional[shared.LogConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logConfiguration') }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    mount_points: Optional[List[shared.MountPoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPoints') }})
    network_configuration: Optional[shared.NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfiguration') }})
    privileged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privileged') }})
    readonly_root_filesystem: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readonlyRootFilesystem') }})
    resource_requirements: Optional[List[shared.ResourceRequirement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceRequirements') }})
    secrets: Optional[List[shared.Secret]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secrets') }})
    ulimits: Optional[List[shared.Ulimit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ulimits') }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    vcpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpus') }})
    volumes: Optional[List[shared.Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclass
class RegisterJobDefinitionRequestBodyNodeProperties:
    r"""RegisterJobDefinitionRequestBodyNodeProperties
    An object representing the node properties of a multi-node parallel job.
    """
    
    main_node: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainNode') }})
    node_range_properties: Optional[List[shared.NodeRangeProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeRangeProperties') }})
    num_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numNodes') }})
    

@dataclass_json
@dataclass
class RegisterJobDefinitionRequestBodyRetryStrategy:
    r"""RegisterJobDefinitionRequestBodyRetryStrategy
    The retry strategy associated with a job. For more information, see <a href=\"https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html\">Automated job retries</a> in the <i>Batch User Guide</i>.
    """
    
    attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attempts') }})
    evaluate_on_exit: Optional[List[shared.EvaluateOnExit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluateOnExit') }})
    

@dataclass_json
@dataclass
class RegisterJobDefinitionRequestBodyTimeout:
    r"""RegisterJobDefinitionRequestBodyTimeout
    An object representing a job timeout configuration.
    """
    
    attempt_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attemptDurationSeconds') }})
    
class RegisterJobDefinitionRequestBodyTypeEnum(str, Enum):
    CONTAINER = "container"
    MULTINODE = "multinode"


@dataclass_json
@dataclass
class RegisterJobDefinitionRequestBody:
    job_definition_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDefinitionName') }})
    type: RegisterJobDefinitionRequestBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    container_properties: Optional[RegisterJobDefinitionRequestBodyContainerProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerProperties') }})
    node_properties: Optional[RegisterJobDefinitionRequestBodyNodeProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeProperties') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    platform_capabilities: Optional[List[shared.PlatformCapabilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformCapabilities') }})
    propagate_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propagateTags') }})
    retry_strategy: Optional[RegisterJobDefinitionRequestBodyRetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryStrategy') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    timeout: Optional[RegisterJobDefinitionRequestBodyTimeout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    

@dataclass
class RegisterJobDefinitionRequest:
    headers: RegisterJobDefinitionHeaders = field()
    request: RegisterJobDefinitionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterJobDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    client_exception: Optional[Any] = field(default=None)
    register_job_definition_response: Optional[shared.RegisterJobDefinitionResponse] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    
