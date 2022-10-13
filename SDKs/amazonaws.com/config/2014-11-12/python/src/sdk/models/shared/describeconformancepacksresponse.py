from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conformancepackdetail


@dataclass_json
@dataclass
class DescribeConformancePacksResponse:
    conformance_pack_details: Optional[List[conformancepackdetail.ConformancePackDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackDetails' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
