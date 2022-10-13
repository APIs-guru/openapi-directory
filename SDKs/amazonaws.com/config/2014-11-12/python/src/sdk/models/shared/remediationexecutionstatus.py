from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourcekey
from . import remediationexecutionstate_enum
from . import remediationexecutionstep


@dataclass_json
@dataclass
class RemediationExecutionStatus:
    invocation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvocationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_key: Optional[resourcekey.ResourceKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceKey' }})
    state: Optional[remediationexecutionstate_enum.RemediationExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    step_details: Optional[List[remediationexecutionstep.RemediationExecutionStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepDetails' }})
    
