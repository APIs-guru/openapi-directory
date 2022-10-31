from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DescribeEventsQueryParams:
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    
class DescribeEventsXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_DESCRIBE_EVENTS = "AmazonDMSv20160101.DescribeEvents"


@dataclass
class DescribeEventsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeEventsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeEventsRequest:
    query_params: DescribeEventsQueryParams = field(default=None)
    headers: DescribeEventsHeaders = field(default=None)
    request: shared.DescribeEventsMessage = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeEventsResponse:
    content_type: str = field(default=None)
    describe_events_response: Optional[shared.DescribeEventsResponse] = field(default=None)
    status_code: int = field(default=None)
    
