from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import organizationconformancepack


@dataclass_json
@dataclass
class DescribeOrganizationConformancePacksResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    organization_conformance_packs: Optional[List[organizationconformancepack.OrganizationConformancePack]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConformancePacks' }})
    
