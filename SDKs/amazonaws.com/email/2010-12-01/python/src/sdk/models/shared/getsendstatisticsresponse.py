from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetSendStatisticsResponse:
    r"""GetSendStatisticsResponse
    Represents a list of data points. This list contains aggregated data from the previous two weeks of your sending activity with Amazon SES.
    """
    
    send_data_points: Optional[List[SendDataPoint]] = field(default=None)
    
