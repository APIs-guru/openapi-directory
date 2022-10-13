from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import conformancepackcompliancetype_enum


@dataclass_json
@dataclass
class ConformancePackComplianceSummary:
    conformance_pack_compliance_status: conformancepackcompliancetype_enum.ConformancePackComplianceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackComplianceStatus' }})
    conformance_pack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackName' }})
    
