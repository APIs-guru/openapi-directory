from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configurationaggregator


@dataclass_json
@dataclass
class DescribeConfigurationAggregatorsResponse:
    configuration_aggregators: Optional[List[configurationaggregator.ConfigurationAggregator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationAggregators' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
