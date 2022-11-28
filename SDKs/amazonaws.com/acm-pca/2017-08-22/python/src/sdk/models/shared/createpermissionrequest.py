from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreatePermissionRequest:
    actions: List[ActionTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    certificate_authority_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CertificateAuthorityArn') }})
    principal: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principal') }})
    source_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceAccount') }})
    
