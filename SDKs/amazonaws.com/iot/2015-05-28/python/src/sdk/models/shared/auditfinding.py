from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuditFinding:
    r"""AuditFinding
    The findings (results) of the audit.
    """
    
    check_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkName') }})
    finding_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingId') }})
    finding_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_suppressed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSuppressed') }})
    non_compliant_resource: Optional[NonCompliantResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonCompliantResource') }})
    reason_for_non_compliance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonForNonCompliance') }})
    reason_for_non_compliance_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonForNonComplianceCode') }})
    related_resources: Optional[List[RelatedResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedResources') }})
    severity: Optional[AuditFindingSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    task_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
