from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuditCheckDetails:
    r"""AuditCheckDetails
    Information about the audit check.
    """
    
    check_compliant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkCompliant') }})
    check_run_status: Optional[AuditCheckRunStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkRunStatus') }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    non_compliant_resources_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonCompliantResourcesCount') }})
    suppressed_non_compliant_resources_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suppressedNonCompliantResourcesCount') }})
    total_resources_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResourcesCount') }})
    
