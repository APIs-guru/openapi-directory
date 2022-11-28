from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServerCertificateSummary:
    r"""ServerCertificateSummary
    An object that contains information about a server certificate.
    """
    
    server_certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificateArn') }})
    server_certificate_status: Optional[ServerCertificateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificateStatus') }})
    server_certificate_status_detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCertificateStatusDetail') }})
    
