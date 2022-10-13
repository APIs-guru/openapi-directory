from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateResolverPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    type_name: str = field(default=None, metadata={'path_param': { 'field_name': 'typeName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateResolverHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateResolverRequestBodyCachingConfig:
    caching_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cachingKeys' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    
class CreateResolverRequestBodyKindEnum(str, Enum):
    UNIT = "UNIT"
    PIPELINE = "PIPELINE"


@dataclass_json
@dataclass
class CreateResolverRequestBodyPipelineConfig:
    functions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functions' }})
    

@dataclass_json
@dataclass
class CreateResolverRequestBodySyncConfig:
    conflict_detection: Optional[shared.ConflictDetectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictDetection' }})
    conflict_handler: Optional[shared.ConflictHandlerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictHandler' }})
    lambda_conflict_handler_config: Optional[shared.LambdaConflictHandlerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaConflictHandlerConfig' }})
    

@dataclass_json
@dataclass
class CreateResolverRequestBody:
    caching_config: Optional[CreateResolverRequestBodyCachingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cachingConfig' }})
    data_source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceName' }})
    field_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldName' }})
    kind: Optional[CreateResolverRequestBodyKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    pipeline_config: Optional[CreateResolverRequestBodyPipelineConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineConfig' }})
    request_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMappingTemplate' }})
    response_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseMappingTemplate' }})
    sync_config: Optional[CreateResolverRequestBodySyncConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncConfig' }})
    

@dataclass
class CreateResolverRequest:
    path_params: CreateResolverPathParams = field(default=None)
    headers: CreateResolverHeaders = field(default=None)
    request: CreateResolverRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateResolverResponse:
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_resolver_response: Optional[shared.CreateResolverResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
