from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatasetTrigger:
    r"""DatasetTrigger
    The <code>DatasetTrigger</code> that specifies when the dataset is automatically updated.
    """
    
    dataset: Optional[TriggeringDataset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    schedule: Optional[Schedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    
