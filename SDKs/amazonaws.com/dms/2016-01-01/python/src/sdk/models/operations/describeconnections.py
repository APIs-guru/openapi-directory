from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DescribeConnectionsQueryParams:
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    
class DescribeConnectionsXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_DESCRIBE_CONNECTIONS = "AmazonDMSv20160101.DescribeConnections"


@dataclass
class DescribeConnectionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeConnectionsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeConnectionsRequest:
    query_params: DescribeConnectionsQueryParams = field(default=None)
    headers: DescribeConnectionsHeaders = field(default=None)
    request: shared.DescribeConnectionsMessage = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeConnectionsResponse:
    content_type: str = field(default=None)
    describe_connections_response: Optional[shared.DescribeConnectionsResponse] = field(default=None)
    resource_not_found_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
