from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lastactivedefinition
from . import blueprintstatus_enum


@dataclass_json
@dataclass
class Blueprint:
    blueprint_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlueprintLocation' }})
    blueprint_service_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlueprintServiceLocation' }})
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    last_active_definition: Optional[lastactivedefinition.LastActiveDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastActiveDefinition' }})
    last_modified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parameter_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterSpec' }})
    status: Optional[blueprintstatus_enum.BlueprintStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
