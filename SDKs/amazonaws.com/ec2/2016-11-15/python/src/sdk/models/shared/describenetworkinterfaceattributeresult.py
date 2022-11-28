from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DescribeNetworkInterfaceAttributeResult:
    r"""DescribeNetworkInterfaceAttributeResult
    Contains the output of DescribeNetworkInterfaceAttribute.
    """
    
    attachment: Optional[NetworkInterfaceAttachment] = field(default=None)
    description: Optional[AttributeValue] = field(default=None)
    groups: Optional[List[GroupIdentifier]] = field(default=None)
    network_interface_id: Optional[str] = field(default=None)
    source_dest_check: Optional[AttributeBooleanValue] = field(default=None)
    
