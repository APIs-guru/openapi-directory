from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import billingmethod_enum
from . import device
from . import deviceminutes
from . import interactionmode_enum
from . import executionresult_enum
from . import executionstatus_enum


@dataclass_json
@dataclass
class RemoteAccessSession:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    billing_method: Optional[billingmethod_enum.BillingMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingMethod' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    device: Optional[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    device_minutes: Optional[deviceminutes.DeviceMinutes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceMinutes' }})
    device_udid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceUdid' }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    host_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostAddress' }})
    instance_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceArn' }})
    interaction_mode: Optional[interactionmode_enum.InteractionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactionMode' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    remote_debug_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteDebugEnabled' }})
    remote_record_app_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteRecordAppArn' }})
    remote_record_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteRecordEnabled' }})
    result: Optional[executionresult_enum.ExecutionResultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    skip_app_resign: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipAppResign' }})
    started: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'started', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[executionstatus_enum.ExecutionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    stopped: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopped', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
