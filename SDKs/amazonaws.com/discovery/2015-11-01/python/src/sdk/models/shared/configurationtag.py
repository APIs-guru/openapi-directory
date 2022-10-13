from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import configurationitemtype_enum


@dataclass_json
@dataclass
class ConfigurationTag:
    configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationId' }})
    configuration_type: Optional[configurationitemtype_enum.ConfigurationItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationType' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    time_of_creation: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeOfCreation', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
