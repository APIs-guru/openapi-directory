from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualGatewayClientTLSCertificate:
    r"""VirtualGatewayClientTLSCertificate
    An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.
    """
    
    file: Optional[VirtualGatewayListenerTLSFileCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    sds: Optional[VirtualGatewayListenerTLSSdsCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sds') }})
    
