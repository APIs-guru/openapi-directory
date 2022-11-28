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
class AssessmentMetadata:
    r"""AssessmentMetadata
     The metadata associated with the specified assessment. 
    """
    
    assessment_reports_destination: Optional[AssessmentReportsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentReportsDestination') }})
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceType') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delegations: Optional[List[Delegation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegations') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    roles: Optional[List[Role]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    scope: Optional[Scope] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    status: Optional[AssessmentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
