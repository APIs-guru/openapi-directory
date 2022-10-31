from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class TransactWriteItemsXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20120810_TRANSACT_WRITE_ITEMS = "DynamoDB_20120810.TransactWriteItems"


@dataclass
class TransactWriteItemsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: TransactWriteItemsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class TransactWriteItemsRequest:
    headers: TransactWriteItemsHeaders = field(default=None)
    request: shared.TransactWriteItemsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TransactWriteItemsResponse:
    content_type: str = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    provisioned_throughput_exceeded_exception: Optional[Any] = field(default=None)
    request_limit_exceeded: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    transact_write_items_output: Optional[shared.TransactWriteItemsOutput] = field(default=None)
    transaction_canceled_exception: Optional[Any] = field(default=None)
    transaction_in_progress_exception: Optional[Any] = field(default=None)
    
