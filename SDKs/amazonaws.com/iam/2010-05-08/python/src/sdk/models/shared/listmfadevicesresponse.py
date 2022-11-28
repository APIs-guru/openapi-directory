from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ListMfaDevicesResponse:
    r"""ListMfaDevicesResponse
    Contains the response to a successful <a>ListMFADevices</a> request. 
    """
    
    mfa_devices: List[MfaDevice] = field()
    is_truncated: Optional[bool] = field(default=None)
    marker: Optional[str] = field(default=None)
    
