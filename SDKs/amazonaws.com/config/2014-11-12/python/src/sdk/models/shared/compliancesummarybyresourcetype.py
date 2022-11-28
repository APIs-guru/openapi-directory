from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComplianceSummaryByResourceType:
    r"""ComplianceSummaryByResourceType
    The number of Amazon Web Services resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each.
    """
    
    compliance_summary: Optional[ComplianceSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceSummary') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    
