from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class ScheduledActionsType:
    next_token: Optional[str] = field(default=None)
    scheduled_update_group_actions: Optional[List[ScheduledUpdateGroupAction]] = field(default=None)
    
