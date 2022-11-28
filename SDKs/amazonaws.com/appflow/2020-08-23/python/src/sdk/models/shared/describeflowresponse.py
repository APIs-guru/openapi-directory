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
class DescribeFlowResponse:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination_flow_config_list: Optional[List[DestinationFlowConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationFlowConfigList') }})
    flow_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowArn') }})
    flow_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowName') }})
    flow_status: Optional[FlowStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowStatus') }})
    flow_status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowStatusMessage') }})
    kms_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsArn') }})
    last_run_execution_details: Optional[ExecutionDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRunExecutionDetails') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedBy') }})
    source_flow_config: Optional[SourceFlowConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFlowConfig') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tasks: Optional[List[Task]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    trigger_config: Optional[TriggerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerConfig') }})
    
