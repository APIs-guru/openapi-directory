from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeOrganizationConformancePackStatusesRequest:
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    organization_conformance_pack_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConformancePackNames' }})
    
