from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ComponentVersionListItem:
    r"""ComponentVersionListItem
    Contains information about a component version in a list.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentName') }})
    component_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentVersion') }})
    
