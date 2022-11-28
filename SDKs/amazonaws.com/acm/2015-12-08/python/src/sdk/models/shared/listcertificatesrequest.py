from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCertificatesRequest:
    certificate_statuses: Optional[List[CertificateStatusEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateStatuses') }})
    includes: Optional[Filters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Includes') }})
    max_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxItems') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
