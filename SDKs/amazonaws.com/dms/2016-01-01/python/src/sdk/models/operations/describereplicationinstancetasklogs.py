from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DescribeReplicationInstanceTaskLogsQueryParams:
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    
class DescribeReplicationInstanceTaskLogsXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_DESCRIBE_REPLICATION_INSTANCE_TASK_LOGS = "AmazonDMSv20160101.DescribeReplicationInstanceTaskLogs"


@dataclass
class DescribeReplicationInstanceTaskLogsHeaders:
    x_amz_target: DescribeReplicationInstanceTaskLogsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeReplicationInstanceTaskLogsRequest:
    headers: DescribeReplicationInstanceTaskLogsHeaders = field()
    query_params: DescribeReplicationInstanceTaskLogsQueryParams = field()
    request: shared.DescribeReplicationInstanceTaskLogsMessage = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeReplicationInstanceTaskLogsResponse:
    content_type: str = field()
    status_code: int = field()
    describe_replication_instance_task_logs_response: Optional[shared.DescribeReplicationInstanceTaskLogsResponse] = field(default=None)
    invalid_resource_state_fault: Optional[Any] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    
