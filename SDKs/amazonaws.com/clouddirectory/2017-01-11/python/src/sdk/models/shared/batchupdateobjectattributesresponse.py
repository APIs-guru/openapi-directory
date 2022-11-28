from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchUpdateObjectAttributesResponse:
    r"""BatchUpdateObjectAttributesResponse
    Represents the output of a <code>BatchUpdate</code> response operation.
    """
    
    object_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectIdentifier') }})
    
