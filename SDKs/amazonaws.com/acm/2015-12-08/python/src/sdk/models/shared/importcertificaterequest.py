from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportCertificateRequest:
    certificate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificate') }})
    private_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateKey') }})
    certificate_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateArn') }})
    certificate_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateChain') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
