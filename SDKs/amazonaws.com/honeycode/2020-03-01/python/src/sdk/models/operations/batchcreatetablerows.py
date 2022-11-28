from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class BatchCreateTableRowsPathParams:
    table_id: str = field(metadata={'path_param': { 'field_name': 'tableId', 'style': 'simple', 'explode': False }})
    workbook_id: str = field(metadata={'path_param': { 'field_name': 'workbookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchCreateTableRowsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BatchCreateTableRowsRequestBody:
    rows_to_create: List[shared.CreateRowData] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowsToCreate') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    

@dataclass
class BatchCreateTableRowsRequest:
    headers: BatchCreateTableRowsHeaders = field()
    path_params: BatchCreateTableRowsPathParams = field()
    request: BatchCreateTableRowsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BatchCreateTableRowsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    batch_create_table_rows_result: Optional[shared.BatchCreateTableRowsResult] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    request_timeout_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
