from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DescribeSpotFleetRequestHistoryResponse:
    r"""DescribeSpotFleetRequestHistoryResponse
    Contains the output of DescribeSpotFleetRequestHistory.
    """
    
    history_records: Optional[List[HistoryRecord]] = field(default=None)
    last_evaluated_time: Optional[datetime] = field(default=None)
    next_token: Optional[str] = field(default=None)
    spot_fleet_request_id: Optional[str] = field(default=None)
    start_time: Optional[datetime] = field(default=None)
    
