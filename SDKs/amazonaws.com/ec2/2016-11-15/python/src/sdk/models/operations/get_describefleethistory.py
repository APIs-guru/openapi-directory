from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeFleetHistoryActionEnum(str, Enum):
    DESCRIBE_FLEET_HISTORY = "DescribeFleetHistory"

class GetDescribeFleetHistoryEventTypeEnum(str, Enum):
    INSTANCE_CHANGE = "instance-change"
    FLEET_CHANGE = "fleet-change"
    SERVICE_ERROR = "service-error"

class GetDescribeFleetHistoryVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDescribeFleetHistoryQueryParams:
    action: GetDescribeFleetHistoryActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    fleet_id: str = field(metadata={'query_param': { 'field_name': 'FleetId', 'style': 'form', 'explode': True }})
    start_time: datetime = field(metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    version: GetDescribeFleetHistoryVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    event_type: Optional[GetDescribeFleetHistoryEventTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'EventType', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeFleetHistoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeFleetHistoryRequest:
    headers: GetDescribeFleetHistoryHeaders = field()
    query_params: GetDescribeFleetHistoryQueryParams = field()
    

@dataclass
class GetDescribeFleetHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
