from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCertificatesResult:
    certificates_info: Optional[List[CertificateInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificatesInfo') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
