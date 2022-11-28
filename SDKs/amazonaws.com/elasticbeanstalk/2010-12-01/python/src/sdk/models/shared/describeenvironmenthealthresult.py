from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class DescribeEnvironmentHealthResult:
    r"""DescribeEnvironmentHealthResult
    Health details for an AWS Elastic Beanstalk environment.
    """
    
    application_metrics: Optional[ApplicationMetrics] = field(default=None)
    causes: Optional[List[str]] = field(default=None)
    color: Optional[str] = field(default=None)
    environment_name: Optional[str] = field(default=None)
    health_status: Optional[str] = field(default=None)
    instances_health: Optional[InstanceHealthSummary] = field(default=None)
    refreshed_at: Optional[datetime] = field(default=None)
    status: Optional[EnvironmentHealthEnum] = field(default=None)
    
