from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import aggregateresourceidentifier


@dataclass_json
@dataclass
class GetAggregateResourceConfigRequest:
    configuration_aggregator_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationAggregatorName' }})
    resource_identifier: aggregateresourceidentifier.AggregateResourceIdentifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceIdentifier' }})
    
