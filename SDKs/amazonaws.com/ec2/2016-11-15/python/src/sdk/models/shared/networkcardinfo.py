from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NetworkCardInfo:
    r"""NetworkCardInfo
    Describes the network card support of the instance type.
    """
    
    maximum_network_interfaces: Optional[int] = field(default=None)
    network_card_index: Optional[int] = field(default=None)
    network_performance: Optional[str] = field(default=None)
    
