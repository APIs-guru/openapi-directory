from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import executionengineconfig
from . import notebookexecutionstatus_enum
from . import tag


@dataclass_json
@dataclass
class NotebookExecution:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    editor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EditorId' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    execution_engine: Optional[executionengineconfig.ExecutionEngineConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionEngine' }})
    last_state_change_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastStateChangeReason' }})
    notebook_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookExecutionId' }})
    notebook_execution_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookExecutionName' }})
    notebook_instance_security_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookInstanceSecurityGroupId' }})
    notebook_params: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotebookParams' }})
    output_notebook_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputNotebookURI' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[notebookexecutionstatus_enum.NotebookExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
