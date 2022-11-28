from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetAggregateResourceConfigRequest:
    configuration_aggregator_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorName') }})
    resource_identifiers: List[AggregateResourceIdentifier] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdentifiers') }})
    
