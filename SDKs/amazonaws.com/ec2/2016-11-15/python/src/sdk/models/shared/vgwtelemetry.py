from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class VgwTelemetry:
    r"""VgwTelemetry
    Describes telemetry for a VPN tunnel.
    """
    
    accepted_route_count: Optional[int] = field(default=None)
    certificate_arn: Optional[str] = field(default=None)
    last_status_change: Optional[datetime] = field(default=None)
    outside_ip_address: Optional[str] = field(default=None)
    status: Optional[TelemetryStatusEnum] = field(default=None)
    status_message: Optional[str] = field(default=None)
    
