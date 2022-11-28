from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateTaskSetRequest:
    cluster: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    scale: Scale = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scale') }})
    service: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    task_set: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSet') }})
    
