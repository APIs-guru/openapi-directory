from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import aggregateresourceidentifier


@dataclass_json
@dataclass
class BatchGetAggregateResourceConfigRequest:
    configuration_aggregator_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationAggregatorName' }})
    resource_identifiers: List[aggregateresourceidentifier.AggregateResourceIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceIdentifiers' }})
    
