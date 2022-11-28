from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateFunctionPathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    function_id: str = field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFunctionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateFunctionRequestBodySyncConfig:
    r"""UpdateFunctionRequestBodySyncConfig
    <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
    """
    
    conflict_detection: Optional[shared.ConflictDetectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictDetection') }})
    conflict_handler: Optional[shared.ConflictHandlerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictHandler') }})
    lambda_conflict_handler_config: Optional[shared.LambdaConflictHandlerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaConflictHandlerConfig') }})
    

@dataclass_json
@dataclass
class UpdateFunctionRequestBody:
    data_source_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceName') }})
    function_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionVersion') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    request_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMappingTemplate') }})
    response_mapping_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseMappingTemplate') }})
    sync_config: Optional[UpdateFunctionRequestBodySyncConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncConfig') }})
    

@dataclass
class UpdateFunctionRequest:
    headers: UpdateFunctionHeaders = field()
    path_params: UpdateFunctionPathParams = field()
    request: UpdateFunctionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateFunctionResponse:
    content_type: str = field()
    status_code: int = field()
    concurrent_modification_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    update_function_response: Optional[shared.UpdateFunctionResponse] = field(default=None)
    
