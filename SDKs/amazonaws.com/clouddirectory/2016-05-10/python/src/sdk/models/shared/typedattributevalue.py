from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TypedAttributeValue:
    r"""TypedAttributeValue
    Represents the data for a typed attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. Attributes have a single value.
    """
    
    binary_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BinaryValue') }})
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BooleanValue') }})
    datetime_value: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatetimeValue'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    number_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StringValue') }})
    
