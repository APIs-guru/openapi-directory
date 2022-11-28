from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetComplianceDetailsByResourceRequest:
    r"""GetComplianceDetailsByResourceRequest
    <p/>
    """
    
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    compliance_types: Optional[List[ComplianceTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceTypes') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
