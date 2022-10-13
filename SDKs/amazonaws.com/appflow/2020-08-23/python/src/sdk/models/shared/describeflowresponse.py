from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import destinationflowconfig
from . import flowstatus_enum
from . import executiondetails
from . import sourceflowconfig
from . import task
from . import triggerconfig


@dataclass_json
@dataclass
class DescribeFlowResponse:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_flow_config_list: Optional[List[destinationflowconfig.DestinationFlowConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationFlowConfigList' }})
    flow_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowArn' }})
    flow_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowName' }})
    flow_status: Optional[flowstatus_enum.FlowStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowStatus' }})
    flow_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowStatusMessage' }})
    kms_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsArn' }})
    last_run_execution_details: Optional[executiondetails.ExecutionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRunExecutionDetails' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedBy' }})
    source_flow_config: Optional[sourceflowconfig.SourceFlowConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceFlowConfig' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tasks: Optional[List[task.Task]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tasks' }})
    trigger_config: Optional[triggerconfig.TriggerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerConfig' }})
    
