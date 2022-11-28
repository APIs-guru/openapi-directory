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
    r"""CreateContainerRecipeRequestBodyInstanceConfiguration
    Defines a custom source AMI and block device mapping configurations of an instance used for building and testing container images.
    """
    
    block_device_mappings: Optional[List[shared.InstanceBlockDeviceMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockDeviceMappings') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    
class CreateContainerRecipeRequestBodyPlatformOverrideEnum(str, Enum):
    WINDOWS = "Windows"
    LINUX = "Linux"


@dataclass_json
@dataclass
class CreateContainerRecipeRequestBodyTargetRepository:
    r"""CreateContainerRecipeRequestBodyTargetRepository
    The container repository where the output container image is stored.
    """
    
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    service: Optional[shared.ContainerRepositoryServiceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    

@dataclass_json
@dataclass
class CreateContainerRecipeRequestBody:
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    components: List[shared.ComponentConfiguration] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    container_type: CreateContainerRecipeRequestBodyContainerTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerType') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_image: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentImage') }})
    semantic_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('semanticVersion') }})
    target_repository: CreateContainerRecipeRequestBodyTargetRepository = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetRepository') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dockerfile_template_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerfileTemplateData') }})
    dockerfile_template_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerfileTemplateUri') }})
    image_os_version_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageOsVersionOverride') }})
    instance_configuration: Optional[CreateContainerRecipeRequestBodyInstanceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceConfiguration') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyId') }})
    platform_override: Optional[CreateContainerRecipeRequestBodyPlatformOverrideEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformOverride') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    working_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workingDirectory') }})
    

@dataclass
class CreateContainerRecipeRequest:
    headers: CreateContainerRecipeHeaders = field()
    request: CreateContainerRecipeRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateContainerRecipeResponse:
    content_type: str = field()
    status_code: int = field()
    call_rate_limit_exceeded_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
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
    
