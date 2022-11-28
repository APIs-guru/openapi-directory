from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AggregatedValue:
    r"""AggregatedValue
    Contains aggregated asset property values (for example, average, minimum, and maximum).
    """
    
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    value: Aggregates = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    quality: Optional[QualityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    
