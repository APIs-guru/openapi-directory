from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import connectortype_enum
from . import flowstatus_enum
from . import executiondetails
from . import connectortype_enum
from . import triggertype_enum


@dataclass_json
@dataclass
class FlowDefinition:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_connector_type: Optional[connectortype_enum.ConnectorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationConnectorType' }})
    flow_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowArn' }})
    flow_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowName' }})
    flow_status: Optional[flowstatus_enum.FlowStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowStatus' }})
    last_run_execution_details: Optional[executiondetails.ExecutionDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRunExecutionDetails' }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedBy' }})
    source_connector_type: Optional[connectortype_enum.ConnectorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceConnectorType' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    trigger_type: Optional[triggertype_enum.TriggerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerType' }})
    
