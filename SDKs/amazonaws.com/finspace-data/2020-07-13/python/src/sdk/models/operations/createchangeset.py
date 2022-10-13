from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateChangesetPathParams:
    dataset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateChangesetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class CreateChangesetRequestBodyChangeTypeEnum(str, Enum):
    REPLACE = "REPLACE"
    APPEND = "APPEND"
    MODIFY = "MODIFY"

class CreateChangesetRequestBodyFormatTypeEnum(str, Enum):
    CSV = "CSV"
    JSON = "JSON"
    PARQUET = "PARQUET"
    XML = "XML"

class CreateChangesetRequestBodySourceTypeEnum(str, Enum):
    S3 = "S3"


@dataclass_json
@dataclass
class CreateChangesetRequestBody:
    change_type: CreateChangesetRequestBodyChangeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeType' }})
    format_params: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formatParams' }})
    format_type: Optional[CreateChangesetRequestBodyFormatTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formatType' }})
    source_params: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceParams' }})
    source_type: CreateChangesetRequestBodySourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceType' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateChangesetRequest:
    path_params: CreateChangesetPathParams = field(default=None)
    headers: CreateChangesetHeaders = field(default=None)
    request: CreateChangesetRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateChangesetResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_changeset_response: Optional[shared.CreateChangesetResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
