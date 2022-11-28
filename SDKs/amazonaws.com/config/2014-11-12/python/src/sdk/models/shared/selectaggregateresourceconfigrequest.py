from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SelectAggregateResourceConfigRequest:
    configuration_aggregator_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorName') }})
    expression: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expression') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
