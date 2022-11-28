from dataclasses import dataclass, field
from typing import Optional


@dataclass
class KinesisFirehoseDestinationDetails:
    r"""KinesisFirehoseDestinationDetails
    The configuration details of the Kinesis Data Firehose destination.
    """
    
    delivery_stream: Optional[str] = field(default=None)
    
