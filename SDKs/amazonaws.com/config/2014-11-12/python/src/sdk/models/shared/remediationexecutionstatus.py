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
class RemediationExecutionStatus:
    r"""RemediationExecutionStatus
    Provides details of the current status of the invoked remediation action for that resource.
    """
    
    invocation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvocationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_key: Optional[ResourceKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceKey') }})
    state: Optional[RemediationExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    step_details: Optional[List[RemediationExecutionStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepDetails') }})
    
