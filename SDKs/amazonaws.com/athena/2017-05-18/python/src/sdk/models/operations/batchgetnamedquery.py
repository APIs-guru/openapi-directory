from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class BatchGetNamedQueryXAmzTargetEnum(str, Enum):
    AMAZON_ATHENA_BATCH_GET_NAMED_QUERY = "AmazonAthena.BatchGetNamedQuery"


@dataclass
class BatchGetNamedQueryHeaders:
    x_amz_target: BatchGetNamedQueryXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchGetNamedQueryRequest:
    headers: BatchGetNamedQueryHeaders = field()
    request: shared.BatchGetNamedQueryInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchGetNamedQueryResponse:
    content_type: str = field()
    status_code: int = field()
    batch_get_named_query_output: Optional[shared.BatchGetNamedQueryOutput] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    
