from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class BatchPutScheduledUpdateGroupActionAnswer:
    failed_scheduled_update_group_actions: Optional[List[FailedScheduledUpdateGroupActionRequest]] = field(default=None)
    
