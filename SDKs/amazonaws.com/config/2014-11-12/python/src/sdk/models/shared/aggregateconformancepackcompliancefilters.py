from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import conformancepackcompliancetype_enum


@dataclass_json
@dataclass
class AggregateConformancePackComplianceFilters:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    aws_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsRegion' }})
    compliance_type: Optional[conformancepackcompliancetype_enum.ConformancePackComplianceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceType' }})
    conformance_pack_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConformancePackName' }})
    
