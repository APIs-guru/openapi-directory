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
class UpdateWorkGroupInput:
    work_group: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkGroup') }})
    configuration_updates: Optional[WorkGroupConfigurationUpdates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationUpdates') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    state: Optional[WorkGroupStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
