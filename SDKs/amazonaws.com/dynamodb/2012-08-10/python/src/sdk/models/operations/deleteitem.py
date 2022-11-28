from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteItemXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20120810_DELETE_ITEM = "DynamoDB_20120810.DeleteItem"


@dataclass
class DeleteItemHeaders:
    x_amz_target: DeleteItemXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItemRequest:
    headers: DeleteItemHeaders = field()
    request: shared.DeleteItemInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteItemResponse:
    content_type: str = field()
    status_code: int = field()
    conditional_check_failed_exception: Optional[Any] = field(default=None)
    delete_item_output: Optional[shared.DeleteItemOutput] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    item_collection_size_limit_exceeded_exception: Optional[Any] = field(default=None)
    provisioned_throughput_exceeded_exception: Optional[Any] = field(default=None)
    request_limit_exceeded: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    transaction_conflict_exception: Optional[Any] = field(default=None)
    
