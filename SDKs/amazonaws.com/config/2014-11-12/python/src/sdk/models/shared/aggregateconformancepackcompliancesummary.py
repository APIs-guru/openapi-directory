from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AggregateConformancePackComplianceSummary:
    r"""AggregateConformancePackComplianceSummary
    Provides a summary of compliance based on either account ID or region. 
    """
    
    compliance_summary: Optional[AggregateConformancePackComplianceCount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceSummary') }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    
