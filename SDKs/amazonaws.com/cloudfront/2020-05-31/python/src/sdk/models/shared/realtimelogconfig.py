from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class RealtimeLogConfig:
    r"""RealtimeLogConfig
    A real-time log configuration.
    """
    
    arn: str = field()
    end_points: List[EndPoint] = field()
    fields: List[str] = field()
    name: str = field()
    sampling_rate: int = field()
    
