from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import compliancecontributorcount
from . import compliancetype_enum


@dataclass_json
@dataclass
class Compliance:
    compliance_contributor_count: Optional[compliancecontributorcount.ComplianceContributorCount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceContributorCount' }})
    compliance_type: Optional[compliancetype_enum.ComplianceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceType' }})
    
