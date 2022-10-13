from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import organizationresourcedetailedstatusfilters


@dataclass_json
@dataclass
class GetOrganizationConformancePackDetailedStatusRequest:
    filters: Optional[organizationresourcedetailedstatusfilters.OrganizationResourceDetailedStatusFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    organization_conformance_pack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConformancePackName' }})
    
