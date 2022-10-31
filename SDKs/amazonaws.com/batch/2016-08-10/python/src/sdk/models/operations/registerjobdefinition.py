from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
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
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    environment: Optional[List[shared.KeyValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionRoleArn' }})
    fargate_platform_configuration: Optional[shared.FargatePlatformConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fargatePlatformConfiguration' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    job_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobRoleArn' }})
    linux_parameters: Optional[shared.LinuxParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linuxParameters' }})
    log_configuration: Optional[shared.LogConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logConfiguration' }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    mount_points: Optional[List[shared.MountPoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mountPoints' }})
    network_configuration: Optional[shared.NetworkConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfiguration' }})
    privileged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privileged' }})
    readonly_root_filesystem: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readonlyRootFilesystem' }})
    resource_requirements: Optional[List[shared.ResourceRequirement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceRequirements' }})
    secrets: Optional[List[shared.Secret]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secrets' }})
    ulimits: Optional[List[shared.Ulimit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ulimits' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    vcpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcpus' }})
    volumes: Optional[List[shared.Volume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumes' }})
    

@dataclass_json
@dataclass
class RegisterJobDefinitionRequestBodyNodeProperties:
    main_node: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainNode' }})
    node_range_properties: Optional[List[shared.NodeRangeProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeRangeProperties' }})
    num_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numNodes' }})
    

@dataclass_json
@dataclass
class RegisterJobDefinitionRequestBodyRetryStrategy:
    attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attempts' }})
    evaluate_on_exit: Optional[List[shared.EvaluateOnExit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluateOnExit' }})
    

@dataclass_json
@dataclass
class RegisterJobDefinitionRequestBodyTimeout:
    attempt_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attemptDurationSeconds' }})
    
class RegisterJobDefinitionRequestBodyTypeEnum(str, Enum):
    CONTAINER = "container"
    MULTINODE = "multinode"


@dataclass_json
@dataclass
class RegisterJobDefinitionRequestBody:
    container_properties: Optional[RegisterJobDefinitionRequestBodyContainerProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerProperties' }})
    job_definition_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDefinitionName' }})
    node_properties: Optional[RegisterJobDefinitionRequestBodyNodeProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeProperties' }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    platform_capabilities: Optional[List[shared.PlatformCapabilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformCapabilities' }})
    propagate_tags: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propagateTags' }})
    retry_strategy: Optional[RegisterJobDefinitionRequestBodyRetryStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryStrategy' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    timeout: Optional[RegisterJobDefinitionRequestBodyTimeout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    type: RegisterJobDefinitionRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class RegisterJobDefinitionRequest:
    headers: RegisterJobDefinitionHeaders = field(default=None)
    request: RegisterJobDefinitionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterJobDefinitionResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    register_job_definition_response: Optional[shared.RegisterJobDefinitionResponse] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
