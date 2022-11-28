from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualGatewayClientPolicyTLS:
    r"""VirtualGatewayClientPolicyTLS
    An object that represents a Transport Layer Security (TLS) client policy.
    """
    
    validation: VirtualGatewayTLSValidationContext = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation') }})
    certificate: Optional[VirtualGatewayClientTLSCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    enforce: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce') }})
    ports: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    
