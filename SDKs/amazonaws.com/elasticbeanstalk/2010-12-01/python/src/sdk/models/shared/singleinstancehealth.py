from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class SingleInstanceHealth:
    r"""SingleInstanceHealth
    Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk environment.
    """
    
    application_metrics: Optional[ApplicationMetrics] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    causes: Optional[List[str]] = field(default=None)
    color: Optional[str] = field(default=None)
    deployment: Optional[Deployment] = field(default=None)
    health_status: Optional[str] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    instance_type: Optional[str] = field(default=None)
    launched_at: Optional[datetime] = field(default=None)
    system: Optional[SystemStatus] = field(default=None)
    
