from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional

class GetDescribeSpotFleetRequestHistoryActionEnum(str, Enum):
    DESCRIBE_SPOT_FLEET_REQUEST_HISTORY = "DescribeSpotFleetRequestHistory"

class GetDescribeSpotFleetRequestHistoryEventTypeEnum(str, Enum):
    INSTANCE_CHANGE = "instanceChange"
    FLEET_REQUEST_CHANGE = "fleetRequestChange"
    ERROR = "error"
    INFORMATION = "information"

class GetDescribeSpotFleetRequestHistoryVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDescribeSpotFleetRequestHistoryQueryParams:
    action: GetDescribeSpotFleetRequestHistoryActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    event_type: Optional[GetDescribeSpotFleetRequestHistoryEventTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'EventType', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    spot_fleet_request_id: str = field(default=None, metadata={'query_param': { 'field_name': 'SpotFleetRequestId', 'style': 'form', 'explode': True }})
    start_time: datetime = field(default=None, metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    version: GetDescribeSpotFleetRequestHistoryVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeSpotFleetRequestHistoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeSpotFleetRequestHistoryRequest:
    query_params: GetDescribeSpotFleetRequestHistoryQueryParams = field(default=None)
    headers: GetDescribeSpotFleetRequestHistoryHeaders = field(default=None)
    

@dataclass
class GetDescribeSpotFleetRequestHistoryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
