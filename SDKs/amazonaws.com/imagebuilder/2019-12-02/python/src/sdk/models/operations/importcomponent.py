from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ImportComponentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class ImportComponentRequestBodyFormatEnum(str, Enum):
    SHELL = "SHELL"

class ImportComponentRequestBodyPlatformEnum(str, Enum):
    WINDOWS = "Windows"
    LINUX = "Linux"

class ImportComponentRequestBodyTypeEnum(str, Enum):
    BUILD = "BUILD"
    TEST = "TEST"


@dataclass_json
@dataclass
class ImportComponentRequestBody:
    change_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeDescription' }})
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    format: ImportComponentRequestBodyFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyId' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    platform: ImportComponentRequestBodyPlatformEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    semantic_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'semanticVersion' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: ImportComponentRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ImportComponentRequest:
    headers: ImportComponentHeaders = field(default=None)
    request: ImportComponentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ImportComponentResponse:
    call_rate_limit_exceeded_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    import_component_response: Optional[shared.ImportComponentResponse] = field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    invalid_version_number_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
