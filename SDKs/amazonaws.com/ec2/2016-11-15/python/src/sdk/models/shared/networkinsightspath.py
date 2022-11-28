from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class NetworkInsightsPath:
    r"""NetworkInsightsPath
    Describes a path.
    """
    
    created_date: Optional[datetime] = field(default=None)
    destination: Optional[str] = field(default=None)
    destination_ip: Optional[str] = field(default=None)
    destination_port: Optional[int] = field(default=None)
    network_insights_path_arn: Optional[str] = field(default=None)
    network_insights_path_id: Optional[str] = field(default=None)
    protocol: Optional[ProtocolEnum] = field(default=None)
    source: Optional[str] = field(default=None)
    source_ip: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
