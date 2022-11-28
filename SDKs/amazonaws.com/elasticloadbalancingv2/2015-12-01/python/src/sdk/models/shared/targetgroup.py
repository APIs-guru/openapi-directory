from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TargetGroup:
    r"""TargetGroup
    Information about a target group.
    """
    
    health_check_enabled: Optional[bool] = field(default=None)
    health_check_interval_seconds: Optional[int] = field(default=None)
    health_check_path: Optional[str] = field(default=None)
    health_check_port: Optional[str] = field(default=None)
    health_check_protocol: Optional[ProtocolEnumEnum] = field(default=None)
    health_check_timeout_seconds: Optional[int] = field(default=None)
    healthy_threshold_count: Optional[int] = field(default=None)
    load_balancer_arns: Optional[List[str]] = field(default=None)
    matcher: Optional[Matcher] = field(default=None)
    port: Optional[int] = field(default=None)
    protocol: Optional[ProtocolEnumEnum] = field(default=None)
    protocol_version: Optional[str] = field(default=None)
    target_group_arn: Optional[str] = field(default=None)
    target_group_name: Optional[str] = field(default=None)
    target_type: Optional[TargetTypeEnumEnum] = field(default=None)
    unhealthy_threshold_count: Optional[int] = field(default=None)
    vpc_id: Optional[str] = field(default=None)
    
