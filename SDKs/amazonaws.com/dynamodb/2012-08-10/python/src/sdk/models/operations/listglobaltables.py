from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListGlobalTablesXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20120810_LIST_GLOBAL_TABLES = "DynamoDB_20120810.ListGlobalTables"


@dataclass
class ListGlobalTablesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListGlobalTablesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListGlobalTablesRequest:
    headers: ListGlobalTablesHeaders = field(default=None)
    request: shared.ListGlobalTablesInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListGlobalTablesResponse:
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    list_global_tables_output: Optional[shared.ListGlobalTablesOutput] = field(default=None)
    status_code: int = field(default=None)
    
