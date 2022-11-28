from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegisterCertificateRequest:
    certificate_data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateData') }})
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    client_cert_auth_settings: Optional[ClientCertAuthSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientCertAuthSettings') }})
    type: Optional[CertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
