from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import conformancepackcompliancefilters


@dataclass_json
@dataclass
class DescribeConformancePackComplianceRequest:
    conformance_pack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackName' }})
    filters: Optional[conformancepackcompliancefilters.ConformancePackComplianceFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
