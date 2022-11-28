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
class CreateResolverPathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    type_name: str = field(metadata={'path_param': { 'field_name': 'typeName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateResolverHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateResolverRequestBodyCachingConfig:
    r"""CreateResolverRequestBodyCachingConfig
    The caching configuration for a resolver that has caching enabled.
    """
    
    caching_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cachingKeys') }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    
class CreateResolverRequestBodyKindEnum(str, Enum):
    UNIT = "UNIT"
    PIPELINE = "PIPELINE"


@dataclass_json
@dataclass
class CreateResolverRequestBodyPipelineConfig:
    r"""CreateResolverRequestBodyPipelineConfig
    The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
    """
    
    functions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functions') }})
    

@dataclass_json
@dataclass
class CreateResolverRequestBodySyncConfig:
    r"""CreateResolverRequestBodySyncConfig
    <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
    """
    
    conflict_detection: Optional[shared.ConflictDetectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictDetection') }})
    conflict_handler: Optional[shared.ConflictHandlerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictHandler') }})
    lambda_conflict_handler_config: Optional[shared.LambdaConflictHandlerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaConflictHandlerConfig') }})
    

@dataclass_json
@dataclass
class CreateResolverRequestBody:
    field_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    caching_config: Optional[CreateResolverRequestBodyCachingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cachingConfig') }})
    data_source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceName') }})
    kind: Optional[CreateResolverRequestBodyKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    pipeline_config: Optional[CreateResolverRequestBodyPipelineConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineConfig') }})
    request_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMappingTemplate') }})
    response_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseMappingTemplate') }})
    sync_config: Optional[CreateResolverRequestBodySyncConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncConfig') }})
    

@dataclass
class CreateResolverRequest:
    headers: CreateResolverHeaders = field()
    path_params: CreateResolverPathParams = field()
    request: CreateResolverRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateResolverResponse:
    content_type: str = field()
    status_code: int = field()
    concurrent_modification_exception: Optional[Any] = field(default=None)
    create_resolver_response: Optional[shared.CreateResolverResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
