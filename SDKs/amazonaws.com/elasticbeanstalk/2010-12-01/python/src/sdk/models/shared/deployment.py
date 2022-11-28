from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class Deployment:
    r"""Deployment
    Information about an application version deployment.
    """
    
    deployment_id: Optional[int] = field(default=None)
    deployment_time: Optional[datetime] = field(default=None)
    status: Optional[str] = field(default=None)
    version_label: Optional[str] = field(default=None)
    
