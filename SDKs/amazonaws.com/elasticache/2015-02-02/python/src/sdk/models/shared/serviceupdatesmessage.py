from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class ServiceUpdatesMessage:
    marker: Optional[str] = field(default=None)
    service_updates: Optional[List[ServiceUpdate]] = field(default=None)
    
