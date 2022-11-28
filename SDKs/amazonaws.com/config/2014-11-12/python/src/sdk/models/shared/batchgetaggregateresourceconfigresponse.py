from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetAggregateResourceConfigResponse:
    base_configuration_items: Optional[List[BaseConfigurationItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseConfigurationItems') }})
    unprocessed_resource_identifiers: Optional[List[AggregateResourceIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedResourceIdentifiers') }})
    
