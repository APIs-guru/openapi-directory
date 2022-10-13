from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import auditcheckrunstatus_enum


@dataclass_json
@dataclass
class AuditCheckDetails:
    check_compliant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkCompliant' }})
    check_run_status: Optional[auditcheckrunstatus_enum.AuditCheckRunStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkRunStatus' }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    non_compliant_resources_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonCompliantResourcesCount' }})
    suppressed_non_compliant_resources_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suppressedNonCompliantResourcesCount' }})
    total_resources_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResourcesCount' }})
    
