from dataclasses import dataclass, field
from . import *


@dataclass
class CreateVirtualMfaDeviceResponse:
    r"""CreateVirtualMfaDeviceResponse
    Contains the response to a successful <a>CreateVirtualMFADevice</a> request. 
    """
    
    virtual_mfa_device: VirtualMfaDevice = field()
    
