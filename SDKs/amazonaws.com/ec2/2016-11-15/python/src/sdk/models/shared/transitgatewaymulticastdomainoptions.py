from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class TransitGatewayMulticastDomainOptions:
    r"""TransitGatewayMulticastDomainOptions
    Describes the options for a transit gateway multicast domain.
    """
    
    auto_accept_shared_associations: Optional[AutoAcceptSharedAssociationsValueEnum] = field(default=None)
    igmpv2_support: Optional[Igmpv2SupportValueEnum] = field(default=None)
    static_sources_support: Optional[StaticSourcesSupportValueEnum] = field(default=None)
    
