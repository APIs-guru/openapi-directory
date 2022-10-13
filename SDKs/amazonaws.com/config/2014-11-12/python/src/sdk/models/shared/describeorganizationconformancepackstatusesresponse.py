from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import organizationconformancepackstatus


@dataclass_json
@dataclass
class DescribeOrganizationConformancePackStatusesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    organization_conformance_pack_statuses: Optional[List[organizationconformancepackstatus.OrganizationConformancePackStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConformancePackStatuses' }})
    
