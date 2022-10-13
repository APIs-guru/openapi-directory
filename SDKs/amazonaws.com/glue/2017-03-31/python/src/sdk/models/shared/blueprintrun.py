from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import blueprintrunstate_enum


@dataclass_json
@dataclass
class BlueprintRun:
    blueprint_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlueprintName' }})
    completed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    rollback_error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RollbackErrorMessage' }})
    run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunId' }})
    started_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[blueprintrunstate_enum.BlueprintRunStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    workflow_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkflowName' }})
    
