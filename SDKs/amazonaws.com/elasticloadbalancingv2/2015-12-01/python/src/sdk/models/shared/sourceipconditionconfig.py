from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class SourceIPConditionConfig:
    r"""SourceIPConditionConfig
    <p>Information about a source IP condition.</p> <p>You can use this condition to route based on the IP address of the source that connects to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not the IP address of the client.</p>
    """
    
    values: Optional[List[str]] = field(default=None)
    
