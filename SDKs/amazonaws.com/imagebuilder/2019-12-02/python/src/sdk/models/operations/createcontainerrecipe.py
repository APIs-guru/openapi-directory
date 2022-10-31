from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateContainerRecipeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateContainerRecipeRequestBodyContainerTypeEnum(str, Enum):
    DOCKER = "DOCKER"


@dataclass_json
@dataclass
class CreateContainerRecipeRequestBodyInstanceConfiguration:
    block_device_mappings: Optional[List[shared.InstanceBlockDeviceMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockDeviceMappings' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    
class CreateContainerRecipeRequestBodyPlatformOverrideEnum(str, Enum):
    WINDOWS = "Windows"
    LINUX = "Linux"


@dataclass_json
@dataclass
class CreateContainerRecipeRequestBodyTargetRepository:
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    service: Optional[shared.ContainerRepositoryServiceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    

@dataclass_json
@dataclass
class CreateContainerRecipeRequestBody:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    components: List[shared.ComponentConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'components' }})
    container_type: CreateContainerRecipeRequestBodyContainerTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    dockerfile_template_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerfileTemplateData' }})
    dockerfile_template_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerfileTemplateUri' }})
    image_os_version_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageOsVersionOverride' }})
    instance_configuration: Optional[CreateContainerRecipeRequestBodyInstanceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceConfiguration' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_image: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentImage' }})
    platform_override: Optional[CreateContainerRecipeRequestBodyPlatformOverrideEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformOverride' }})
    semantic_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'semanticVersion' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    target_repository: CreateContainerRecipeRequestBodyTargetRepository = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetRepository' }})
    working_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workingDirectory' }})
    

@dataclass
class CreateContainerRecipeRequest:
    headers: CreateContainerRecipeHeaders = field(default=None)
    request: CreateContainerRecipeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateContainerRecipeResponse:
    call_rate_limit_exceeded_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_container_recipe_response: Optional[shared.CreateContainerRecipeResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    invalid_version_number_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
