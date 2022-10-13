from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListTablesQueryParams:
    exclusive_start_table_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ExclusiveStartTableName', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    
class ListTablesXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20111205_LIST_TABLES = "DynamoDB_20111205.ListTables"


@dataclass
class ListTablesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListTablesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListTablesRequest:
    query_params: ListTablesQueryParams = field(default=None)
    headers: ListTablesHeaders = field(default=None)
    request: shared.ListTablesInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListTablesResponse:
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    list_tables_output: Optional[shared.ListTablesOutput] = field(default=None)
    status_code: int = field(default=None)
    
