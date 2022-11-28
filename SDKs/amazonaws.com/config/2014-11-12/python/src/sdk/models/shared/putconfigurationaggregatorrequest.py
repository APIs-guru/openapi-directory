from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutConfigurationAggregatorRequest:
    configuration_aggregator_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationAggregatorName') }})
    account_aggregation_sources: Optional[List[AccountAggregationSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountAggregationSources') }})
    organization_aggregation_source: Optional[OrganizationAggregationSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationAggregationSource') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
