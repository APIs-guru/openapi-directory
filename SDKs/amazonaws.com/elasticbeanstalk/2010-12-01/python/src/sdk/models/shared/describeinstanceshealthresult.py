from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DescribeInstancesHealthResult:
    r"""DescribeInstancesHealthResult
    Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk environment.
    """
    
    instance_health_list: Optional[List[SingleInstanceHealth]] = field(default=None)
    next_token: Optional[str] = field(default=None)
    refreshed_at: Optional[datetime] = field(default=None)
    
