from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DescribeFleetHistoryResult:
    fleet_id: Optional[str] = field(default=None)
    history_records: Optional[List[HistoryRecordEntry]] = field(default=None)
    last_evaluated_time: Optional[datetime] = field(default=None)
    next_token: Optional[str] = field(default=None)
    start_time: Optional[datetime] = field(default=None)
    
