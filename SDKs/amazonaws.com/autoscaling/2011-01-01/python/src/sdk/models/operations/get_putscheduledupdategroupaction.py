from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetPutScheduledUpdateGroupActionActionEnum(str, Enum):
    PUT_SCHEDULED_UPDATE_GROUP_ACTION = "PutScheduledUpdateGroupAction"

class GetPutScheduledUpdateGroupActionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclass
class GetPutScheduledUpdateGroupActionQueryParams:
    action: GetPutScheduledUpdateGroupActionActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    auto_scaling_group_name: str = field(metadata={'query_param': { 'field_name': 'AutoScalingGroupName', 'style': 'form', 'explode': True }})
    scheduled_action_name: str = field(metadata={'query_param': { 'field_name': 'ScheduledActionName', 'style': 'form', 'explode': True }})
    version: GetPutScheduledUpdateGroupActionVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    desired_capacity: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'DesiredCapacity', 'style': 'form', 'explode': True }})
    end_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    max_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxSize', 'style': 'form', 'explode': True }})
    min_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MinSize', 'style': 'form', 'explode': True }})
    recurrence: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Recurrence', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'Time', 'style': 'form', 'explode': True }})
    time_zone: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TimeZone', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPutScheduledUpdateGroupActionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPutScheduledUpdateGroupActionRequest:
    headers: GetPutScheduledUpdateGroupActionHeaders = field()
    query_params: GetPutScheduledUpdateGroupActionQueryParams = field()
    

@dataclass
class GetPutScheduledUpdateGroupActionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
