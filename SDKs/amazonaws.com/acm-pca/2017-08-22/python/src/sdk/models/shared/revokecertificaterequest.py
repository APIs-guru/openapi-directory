from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RevokeCertificateRequest:
    certificate_authority_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    certificate_serial: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateSerial') }})
    revocation_reason: RevocationReasonEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RevocationReason') }})
    
