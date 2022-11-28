from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class FlowLog:
    r"""FlowLog
    Describes a flow log.
    """
    
    creation_time: Optional[datetime] = field(default=None)
    deliver_logs_error_message: Optional[str] = field(default=None)
    deliver_logs_permission_arn: Optional[str] = field(default=None)
    deliver_logs_status: Optional[str] = field(default=None)
    flow_log_id: Optional[str] = field(default=None)
    flow_log_status: Optional[str] = field(default=None)
    log_destination: Optional[str] = field(default=None)
    log_destination_type: Optional[LogDestinationTypeEnum] = field(default=None)
    log_format: Optional[str] = field(default=None)
    log_group_name: Optional[str] = field(default=None)
    max_aggregation_interval: Optional[int] = field(default=None)
    resource_id: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    traffic_type: Optional[TrafficTypeEnum] = field(default=None)
    
