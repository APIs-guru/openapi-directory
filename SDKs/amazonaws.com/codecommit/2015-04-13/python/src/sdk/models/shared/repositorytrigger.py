from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RepositoryTrigger:
    r"""RepositoryTrigger
    Information about a trigger for a repository.
    """
    
    destination_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationArn') }})
    events: List[RepositoryTriggerEventEnumEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    branches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branches') }})
    custom_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customData') }})
    
