from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import workflowgraph
from . import startingeventbatchcondition
from . import workflowrunstatistics
from . import workflowrunstatus_enum


@dataclass_json
@dataclass
class WorkflowRun:
    completed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    graph: Optional[workflowgraph.WorkflowGraph] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Graph' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    previous_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreviousRunId' }})
    started_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    starting_event_batch_condition: Optional[startingeventbatchcondition.StartingEventBatchCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartingEventBatchCondition' }})
    statistics: Optional[workflowrunstatistics.WorkflowRunStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Statistics' }})
    status: Optional[workflowrunstatus_enum.WorkflowRunStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    workflow_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkflowRunId' }})
    workflow_run_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkflowRunProperties' }})
    
