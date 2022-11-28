from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class InstanceStatusDetails:
    r"""InstanceStatusDetails
    Describes the instance status.
    """
    
    impaired_since: Optional[datetime] = field(default=None)
    name: Optional[StatusNameEnum] = field(default=None)
    status: Optional[StatusTypeEnum] = field(default=None)
    
