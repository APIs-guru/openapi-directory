from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DelegationMetadata:
    r"""DelegationMetadata
     The metadata associated with the specified delegation. 
    """
    
    assessment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentId') }})
    assessment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assessmentName') }})
    control_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlSetName') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    status: Optional[DelegationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
