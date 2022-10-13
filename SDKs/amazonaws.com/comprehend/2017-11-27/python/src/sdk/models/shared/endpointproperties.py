from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import endpointstatus_enum


@dataclass_json
@dataclass
class EndpointProperties:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    current_inference_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentInferenceUnits' }})
    data_access_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAccessRoleArn' }})
    desired_inference_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredInferenceUnits' }})
    endpoint_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndpointArn' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelArn' }})
    status: Optional[endpointstatus_enum.EndpointStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
