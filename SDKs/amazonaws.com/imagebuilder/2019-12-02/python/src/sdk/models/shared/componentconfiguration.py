from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComponentConfiguration:
    r"""ComponentConfiguration
     Configuration details of the component.
    """
    
    component_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentArn') }})
    parameters: Optional[List[ComponentParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
