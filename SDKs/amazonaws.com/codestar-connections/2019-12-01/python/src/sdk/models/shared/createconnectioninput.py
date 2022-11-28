from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateConnectionInput:
    connection_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionName') }})
    host_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostArn') }})
    provider_type: Optional[ProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderType') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
