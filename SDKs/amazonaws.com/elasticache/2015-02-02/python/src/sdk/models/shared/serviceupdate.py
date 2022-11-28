from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ServiceUpdate:
    r"""ServiceUpdate
    An update that you can apply to your Redis clusters.
    """
    
    auto_update_after_recommended_apply_by_date: Optional[bool] = field(default=None)
    engine: Optional[str] = field(default=None)
    engine_version: Optional[str] = field(default=None)
    estimated_update_time: Optional[str] = field(default=None)
    service_update_description: Optional[str] = field(default=None)
    service_update_end_date: Optional[datetime] = field(default=None)
    service_update_name: Optional[str] = field(default=None)
    service_update_recommended_apply_by_date: Optional[datetime] = field(default=None)
    service_update_release_date: Optional[datetime] = field(default=None)
    service_update_severity: Optional[ServiceUpdateSeverityEnum] = field(default=None)
    service_update_status: Optional[ServiceUpdateStatusEnum] = field(default=None)
    service_update_type: Optional[ServiceUpdateTypeEnum] = field(default=None)
    
