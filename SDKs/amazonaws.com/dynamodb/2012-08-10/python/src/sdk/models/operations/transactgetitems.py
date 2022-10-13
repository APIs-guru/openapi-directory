from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class TransactGetItemsXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20120810_TRANSACT_GET_ITEMS = "DynamoDB_20120810.TransactGetItems"


@dataclass
class TransactGetItemsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: TransactGetItemsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class TransactGetItemsRequest:
    headers: TransactGetItemsHeaders = field(default=None)
    request: shared.TransactGetItemsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TransactGetItemsResponse:
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    provisioned_throughput_exceeded_exception: Optional[Any] = field(default=None)
    request_limit_exceeded: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    transact_get_items_output: Optional[shared.TransactGetItemsOutput] = field(default=None)
    transaction_canceled_exception: Optional[Any] = field(default=None)
    
