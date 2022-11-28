from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateComponentRequest:
    component_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComponentName') }})
    resource_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceGroupName') }})
    new_component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewComponentName') }})
    resource_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceList') }})
    
