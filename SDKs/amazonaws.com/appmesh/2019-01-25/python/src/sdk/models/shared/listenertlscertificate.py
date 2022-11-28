from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListenerTLSCertificate:
    r"""ListenerTLSCertificate
    An object that represents a listener's Transport Layer Security (TLS) certificate.
    """
    
    acm: Optional[ListenerTLSAcmCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acm') }})
    file: Optional[ListenerTLSFileCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    sds: Optional[ListenerTLSSdsCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sds') }})
    
