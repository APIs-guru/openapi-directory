from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetOrganizationConformancePackDetailedStatusResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    organization_conformance_pack_detailed_statuses: Optional[List[OrganizationConformancePackDetailedStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationConformancePackDetailedStatuses') }})
    
