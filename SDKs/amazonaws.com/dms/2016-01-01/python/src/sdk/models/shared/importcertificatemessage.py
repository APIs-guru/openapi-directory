from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportCertificateMessage:
    certificate_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateIdentifier') }})
    certificate_pem: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificatePem') }})
    certificate_wallet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateWallet') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
