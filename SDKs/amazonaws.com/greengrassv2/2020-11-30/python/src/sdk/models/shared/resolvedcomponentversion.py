from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResolvedComponentVersion:
    r"""ResolvedComponentVersion
    Contains information about a component version that is compatible to run on a Greengrass core device.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentName') }})
    component_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentVersion') }})
    recipe: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipe') }})
    
