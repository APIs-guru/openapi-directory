from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configurationaggregator


@dataclass_json
@dataclass
class PutConfigurationAggregatorResponse:
    configuration_aggregator: Optional[configurationaggregator.ConfigurationAggregator] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationAggregator' }})
    
