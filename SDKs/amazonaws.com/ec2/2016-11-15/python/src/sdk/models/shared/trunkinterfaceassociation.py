from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class TrunkInterfaceAssociation:
    r"""TrunkInterfaceAssociation
    <note> <p>Currently available in <b>limited preview only</b>. If you are interested in using this feature, contact your account manager.</p> </note> <p>Information about an association between a branch network interface with a trunk network interface.</p>
    """
    
    association_id: Optional[str] = field(default=None)
    branch_interface_id: Optional[str] = field(default=None)
    gre_key: Optional[int] = field(default=None)
    interface_protocol: Optional[InterfaceProtocolTypeEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    trunk_interface_id: Optional[str] = field(default=None)
    vlan_id: Optional[int] = field(default=None)
    
