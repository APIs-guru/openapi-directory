from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Component:
    r"""Component
    Contains information about a component.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentName') }})
    latest_version: Optional[ComponentLatestVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestVersion') }})
    
