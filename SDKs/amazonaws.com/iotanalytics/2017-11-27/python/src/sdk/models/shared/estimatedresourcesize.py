from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EstimatedResourceSize:
    r"""EstimatedResourceSize
    The estimated size of the resource.
    """
    
    estimated_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    estimated_size_in_bytes: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedSizeInBytes') }})
    
