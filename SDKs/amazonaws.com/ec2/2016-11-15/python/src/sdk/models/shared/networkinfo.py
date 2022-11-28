from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class NetworkInfo:
    r"""NetworkInfo
    Describes the networking features of the instance type.
    """
    
    default_network_card_index: Optional[int] = field(default=None)
    efa_info: Optional[EfaInfo] = field(default=None)
    efa_supported: Optional[bool] = field(default=None)
    ena_support: Optional[EnaSupportEnum] = field(default=None)
    encryption_in_transit_supported: Optional[bool] = field(default=None)
    ipv4_addresses_per_interface: Optional[int] = field(default=None)
    ipv6_addresses_per_interface: Optional[int] = field(default=None)
    ipv6_supported: Optional[bool] = field(default=None)
    maximum_network_cards: Optional[int] = field(default=None)
    maximum_network_interfaces: Optional[int] = field(default=None)
    network_cards: Optional[List[NetworkCardInfo]] = field(default=None)
    network_performance: Optional[str] = field(default=None)
    
