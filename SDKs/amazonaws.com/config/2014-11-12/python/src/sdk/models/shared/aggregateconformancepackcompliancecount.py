from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AggregateConformancePackComplianceCount:
    compliant_conformance_pack_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompliantConformancePackCount' }})
    non_compliant_conformance_pack_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonCompliantConformancePackCount' }})
    
