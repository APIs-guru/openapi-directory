from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetResourceConfigResponse:
    base_configuration_items: Optional[List[BaseConfigurationItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseConfigurationItems') }})
    unprocessed_resource_keys: Optional[List[ResourceKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unprocessedResourceKeys') }})
    
