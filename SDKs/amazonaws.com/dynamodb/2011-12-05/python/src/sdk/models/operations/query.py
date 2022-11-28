from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class QueryQueryParams:
    exclusive_start_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ExclusiveStartKey', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    
class QueryXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20111205_QUERY = "DynamoDB_20111205.Query"


@dataclass
class QueryHeaders:
    x_amz_target: QueryXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class QueryRequest:
    headers: QueryHeaders = field()
    query_params: QueryQueryParams = field()
    request: shared.QueryInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class QueryResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_error: Optional[Any] = field(default=None)
    provisioned_throughput_exceeded_exception: Optional[Any] = field(default=None)
    query_output: Optional[shared.QueryOutput] = field(default=None)
    request_limit_exceeded: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
