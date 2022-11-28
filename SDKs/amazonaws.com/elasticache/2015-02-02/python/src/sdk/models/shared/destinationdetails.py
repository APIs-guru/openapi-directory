from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinationDetails:
    r"""DestinationDetails
    Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
    """
    
    cloud_watch_logs_details: Optional[CloudWatchLogsDestinationDetails] = field(default=None)
    kinesis_firehose_details: Optional[KinesisFirehoseDestinationDetails] = field(default=None)
    
