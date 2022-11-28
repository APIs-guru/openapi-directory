from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AnalysisPacketHeader:
    r"""AnalysisPacketHeader
    Describes a header. Reflects any changes made by a component as traffic passes through. The fields of an inbound header are null except for the first component of a path.
    """
    
    destination_addresses: Optional[List[str]] = field(default=None)
    destination_port_ranges: Optional[List[PortRange]] = field(default=None)
    protocol: Optional[str] = field(default=None)
    source_addresses: Optional[List[str]] = field(default=None)
    source_port_ranges: Optional[List[PortRange]] = field(default=None)
    
