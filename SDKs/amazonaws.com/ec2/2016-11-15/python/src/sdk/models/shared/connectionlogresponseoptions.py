from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ConnectionLogResponseOptions:
    r"""ConnectionLogResponseOptions
    Information about the client connection logging options for a Client VPN endpoint.
    """
    
    cloudwatch_log_group: Optional[str] = field(default=None)
    cloudwatch_log_stream: Optional[str] = field(default=None)
    enabled: Optional[bool] = field(default=None)
    
