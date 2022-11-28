from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAggregateResourceConfigRequest:
    configuration_aggregator_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorName') }})
    resource_identifier: AggregateResourceIdentifier = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdentifier') }})
    
