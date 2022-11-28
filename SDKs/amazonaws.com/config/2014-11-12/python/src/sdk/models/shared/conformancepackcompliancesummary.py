from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConformancePackComplianceSummary:
    r"""ConformancePackComplianceSummary
    Summary includes the name and status of the conformance pack.
    """
    
    conformance_pack_compliance_status: ConformancePackComplianceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackComplianceStatus') }})
    conformance_pack_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConformancePackName') }})
    
