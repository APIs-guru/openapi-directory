from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class UpdateActionsMessage:
    marker: Optional[str] = field(default=None)
    update_actions: Optional[List[UpdateAction]] = field(default=None)
    
