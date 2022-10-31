from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateGlobalTableXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20120810_CREATE_GLOBAL_TABLE = "DynamoDB_20120810.CreateGlobalTable"


@dataclass
class CreateGlobalTableHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateGlobalTableXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateGlobalTableRequest:
    headers: CreateGlobalTableHeaders = field(default=None)
    request: shared.CreateGlobalTableInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGlobalTableResponse:
    content_type: str = field(default=None)
    create_global_table_output: Optional[shared.CreateGlobalTableOutput] = field(default=None)
    global_table_already_exists_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    table_not_found_exception: Optional[Any] = field(default=None)
    
