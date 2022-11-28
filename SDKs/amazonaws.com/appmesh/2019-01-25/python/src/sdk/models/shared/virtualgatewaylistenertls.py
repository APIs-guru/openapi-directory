from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualGatewayListenerTLS:
    r"""VirtualGatewayListenerTLS
    An object that represents the Transport Layer Security (TLS) properties for a listener.
    """
    
    certificate: VirtualGatewayListenerTLSCertificate = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    mode: VirtualGatewayListenerTLSModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    validation: Optional[VirtualGatewayListenerTLSValidationContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation') }})
    
