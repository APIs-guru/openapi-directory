from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import jobflowexecutionstate_enum


@dataclass_json
@dataclass
class DescribeJobFlowsInput:
    created_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_before: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBefore', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    job_flow_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobFlowIds' }})
    job_flow_states: Optional[List[jobflowexecutionstate_enum.JobFlowExecutionStateEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobFlowStates' }})
    
