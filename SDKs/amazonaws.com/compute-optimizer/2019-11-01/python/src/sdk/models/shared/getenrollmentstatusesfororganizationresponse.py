from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountenrollmentstatus


@dataclass_json
@dataclass
class GetEnrollmentStatusesForOrganizationResponse:
    account_enrollment_statuses: Optional[List[accountenrollmentstatus.AccountEnrollmentStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountEnrollmentStatuses' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
