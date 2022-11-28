from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateHostInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    provider_endpoint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderEndpoint') }})
    provider_type: ProviderTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderType') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    vpc_configuration: Optional[VpcConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcConfiguration') }})
    
