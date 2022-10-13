from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import blueprintdetails
from . import workflowgraph
from . import workflowrun


@dataclass_json
@dataclass
class Workflow:
    blueprint_details: Optional[blueprintdetails.BlueprintDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlueprintDetails' }})
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_run_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultRunProperties' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    graph: Optional[workflowgraph.WorkflowGraph] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Graph' }})
    last_modified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_run: Optional[workflowrun.WorkflowRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastRun' }})
    max_concurrent_runs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxConcurrentRuns' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
