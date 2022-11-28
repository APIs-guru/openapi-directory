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
class Framework:
    r"""Framework
     The file used to structure and automate Audit Manager assessments for a given compliance standard. 
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    compliance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceType') }})
    control_sets: Optional[List[ControlSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlSets') }})
    control_sources: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlSources') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedBy') }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[FrameworkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
