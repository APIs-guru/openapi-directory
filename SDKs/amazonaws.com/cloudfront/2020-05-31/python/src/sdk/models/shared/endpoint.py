from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class EndPoint:
    r"""EndPoint
    Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.
    """
    
    stream_type: str = field()
    kinesis_stream_config: Optional[KinesisStreamConfig] = field(default=None)
    
