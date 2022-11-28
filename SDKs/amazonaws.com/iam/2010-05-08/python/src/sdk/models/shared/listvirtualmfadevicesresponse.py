from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListVirtualMfaDevicesResponse:
    r"""ListVirtualMfaDevicesResponse
    Contains the response to a successful <a>ListVirtualMFADevices</a> request. 
    """
    
    virtual_mfa_devices: List[VirtualMfaDevice] = field()
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
