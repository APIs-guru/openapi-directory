from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateResolverPathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    field_name: str = field(default=None, metadata={'path_param': { 'field_name': 'fieldName', 'style': 'simple', 'explode': False }})
    type_name: str = field(default=None, metadata={'path_param': { 'field_name': 'typeName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateResolverHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateResolverRequestBodyCachingConfig:
    caching_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cachingKeys' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    
class UpdateResolverRequestBodyKindEnum(str, Enum):
    UNIT = "UNIT"
    PIPELINE = "PIPELINE"


@dataclass_json
@dataclass
class UpdateResolverRequestBodyPipelineConfig:
    functions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functions' }})
    

@dataclass_json
@dataclass
class UpdateResolverRequestBodySyncConfig:
    conflict_detection: Optional[shared.ConflictDetectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictDetection' }})
    conflict_handler: Optional[shared.ConflictHandlerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictHandler' }})
    lambda_conflict_handler_config: Optional[shared.LambdaConflictHandlerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaConflictHandlerConfig' }})
    

@dataclass_json
@dataclass
class UpdateResolverRequestBody:
    caching_config: Optional[UpdateResolverRequestBodyCachingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cachingConfig' }})
    data_source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceName' }})
    kind: Optional[UpdateResolverRequestBodyKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    pipeline_config: Optional[UpdateResolverRequestBodyPipelineConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineConfig' }})
    request_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMappingTemplate' }})
    response_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseMappingTemplate' }})
    sync_config: Optional[UpdateResolverRequestBodySyncConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncConfig' }})
    

@dataclass
class UpdateResolverRequest:
    path_params: UpdateResolverPathParams = field(default=None)
    headers: UpdateResolverHeaders = field(default=None)
    request: UpdateResolverRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateResolverResponse:
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_resolver_response: Optional[shared.UpdateResolverResponse] = field(default=None)
    
