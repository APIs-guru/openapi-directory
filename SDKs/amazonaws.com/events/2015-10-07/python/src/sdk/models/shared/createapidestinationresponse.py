from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import apidestinationstate_enum


@dataclass_json
@dataclass
class CreateAPIDestinationResponse:
    api_destination_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiDestinationArn' }})
    api_destination_state: Optional[apidestinationstate_enum.APIDestinationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiDestinationState' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
