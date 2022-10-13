from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IncrementalPullConfig:
    datetime_type_field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatetimeTypeFieldName' }})
    
