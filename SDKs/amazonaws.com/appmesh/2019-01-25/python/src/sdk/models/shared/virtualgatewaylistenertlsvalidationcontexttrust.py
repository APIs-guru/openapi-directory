from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualGatewayListenerTLSValidationContextTrust:
    r"""VirtualGatewayListenerTLSValidationContextTrust
    An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context trust.
    """
    
    file: Optional[VirtualGatewayTLSValidationContextFileTrust] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    sds: Optional[VirtualGatewayTLSValidationContextSdsTrust] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sds') }})
    
