from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import organizationconformancepackdetailedstatus


@dataclass_json
@dataclass
class GetOrganizationConformancePackDetailedStatusResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    organization_conformance_pack_detailed_statuses: Optional[List[organizationconformancepackdetailedstatus.OrganizationConformancePackDetailedStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConformancePackDetailedStatuses' }})
    
