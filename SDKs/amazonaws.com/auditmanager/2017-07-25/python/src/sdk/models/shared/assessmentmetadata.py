from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import assessmentreportsdestination
from . import delegation
from . import role
from . import scope
from . import assessmentstatus_enum


@dataclass_json
@dataclass
class AssessmentMetadata:
    assessment_reports_destination: Optional[assessmentreportsdestination.AssessmentReportsDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentReportsDestination' }})
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceType' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delegations: Optional[List[delegation.Delegation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delegations' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    roles: Optional[List[role.Role]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    scope: Optional[scope.Scope] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    status: Optional[assessmentstatus_enum.AssessmentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
