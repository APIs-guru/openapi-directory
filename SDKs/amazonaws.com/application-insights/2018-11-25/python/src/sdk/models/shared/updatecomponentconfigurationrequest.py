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
class UpdateComponentConfigurationRequest:
    component_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentName') }})
    resource_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceGroupName') }})
    component_configuration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentConfiguration') }})
    monitor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Monitor') }})
    tier: Optional[TierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tier') }})
    
