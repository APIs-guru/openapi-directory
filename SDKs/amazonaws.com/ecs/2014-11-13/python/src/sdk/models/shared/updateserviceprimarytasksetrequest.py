from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateServicePrimaryTaskSetRequest:
    cluster: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    primary_task_set: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryTaskSet') }})
    service: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    
