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
class WorkflowRun:
    r"""WorkflowRun
    A workflow run is an execution of a workflow providing all the runtime information.
    """
    
    completed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    graph: Optional[WorkflowGraph] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Graph') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    previous_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviousRunId') }})
    started_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    starting_event_batch_condition: Optional[StartingEventBatchCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartingEventBatchCondition') }})
    statistics: Optional[WorkflowRunStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Statistics') }})
    status: Optional[WorkflowRunStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    workflow_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowRunId') }})
    workflow_run_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowRunProperties') }})
    
