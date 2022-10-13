from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TypedAttributeValue:
    binary_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BinaryValue' }})
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BooleanValue' }})
    datetime_value: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatetimeValue', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StringValue' }})
    
