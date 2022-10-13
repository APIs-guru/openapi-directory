from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import compliancecontributorcount
from . import compliancecontributorcount


@dataclass_json
@dataclass
class ComplianceSummary:
    compliance_summary_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceSummaryTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    compliant_resource_count: Optional[compliancecontributorcount.ComplianceContributorCount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompliantResourceCount' }})
    non_compliant_resource_count: Optional[compliancecontributorcount.ComplianceContributorCount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonCompliantResourceCount' }})
    
