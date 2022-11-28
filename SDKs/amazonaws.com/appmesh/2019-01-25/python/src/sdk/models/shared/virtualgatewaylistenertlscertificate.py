from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualGatewayListenerTLSCertificate:
    r"""VirtualGatewayListenerTLSCertificate
    An object that represents a listener's Transport Layer Security (TLS) certificate.
    """
    
    acm: Optional[VirtualGatewayListenerTLSAcmCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acm') }})
    file: Optional[VirtualGatewayListenerTLSFileCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    sds: Optional[VirtualGatewayListenerTLSSdsCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sds') }})
    
