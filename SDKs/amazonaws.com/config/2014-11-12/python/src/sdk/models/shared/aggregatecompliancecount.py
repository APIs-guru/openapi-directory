from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AggregateComplianceCount:
    r"""AggregateComplianceCount
    Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.
    """
    
    compliance_summary: Optional[ComplianceSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceSummary') }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    
