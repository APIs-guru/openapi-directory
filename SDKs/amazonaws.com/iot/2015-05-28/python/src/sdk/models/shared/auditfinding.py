from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import noncompliantresource
from . import relatedresource
from . import auditfindingseverity_enum


@dataclass_json
@dataclass
class AuditFinding:
    check_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkName' }})
    finding_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingId' }})
    finding_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_suppressed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSuppressed' }})
    non_compliant_resource: Optional[noncompliantresource.NonCompliantResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonCompliantResource' }})
    reason_for_non_compliance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonForNonCompliance' }})
    reason_for_non_compliance_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonForNonComplianceCode' }})
    related_resources: Optional[List[relatedresource.RelatedResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relatedResources' }})
    severity: Optional[auditfindingseverity_enum.AuditFindingSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    task_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
