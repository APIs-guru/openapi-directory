from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class OptionStatus:
    r"""OptionStatus
    The status of domain configuration option.
    """
    
    creation_date: datetime = field()
    state: OptionStateEnum = field()
    update_date: datetime = field()
    pending_deletion: Optional[bool] = field(default=None)
    update_version: Optional[int] = field(default=None)
    
