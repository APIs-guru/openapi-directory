from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CloudWatchLogsDestinationDetails:
    r"""CloudWatchLogsDestinationDetails
    The configuration details of the CloudWatch Logs destination.
    """
    
    log_group: Optional[str] = field(default=None)
    
