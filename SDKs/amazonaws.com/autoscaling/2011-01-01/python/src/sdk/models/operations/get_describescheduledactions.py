from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum

class GetDescribeScheduledActionsActionEnum(str, Enum):
    DESCRIBE_SCHEDULED_ACTIONS = "DescribeScheduledActions"

class GetDescribeScheduledActionsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclass
class GetDescribeScheduledActionsQueryParams:
    action: GetDescribeScheduledActionsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeScheduledActionsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    auto_scaling_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AutoScalingGroupName', 'style': 'form', 'explode': True }})
    end_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    scheduled_action_names: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ScheduledActionNames', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeScheduledActionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeScheduledActionsRequest:
    headers: GetDescribeScheduledActionsHeaders = field()
    query_params: GetDescribeScheduledActionsQueryParams = field()
    

@dataclass
class GetDescribeScheduledActionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
