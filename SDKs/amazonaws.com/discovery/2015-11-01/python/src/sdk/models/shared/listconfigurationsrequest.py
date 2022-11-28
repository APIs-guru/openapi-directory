from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListConfigurationsRequest:
    configuration_type: ConfigurationItemTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationType') }})
    filters: Optional[List[Filter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    order_by: Optional[List[OrderByElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    
