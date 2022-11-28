from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IncrementalPullConfig:
    r"""IncrementalPullConfig
     Specifies the configuration used when importing incremental records from the source. 
    """
    
    datetime_type_field_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datetimeTypeFieldName') }})
    
