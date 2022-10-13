from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LastActiveDefinition:
    blueprint_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlueprintLocation' }})
    blueprint_service_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlueprintServiceLocation' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    last_modified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parameter_spec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterSpec' }})
    
