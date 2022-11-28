from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class BatchDeleteScheduledActionAnswer:
    failed_scheduled_actions: Optional[List[FailedScheduledUpdateGroupActionRequest]] = field(default=None)
    
