from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import baseconfigurationitem
from . import aggregateresourceidentifier


@dataclass_json
@dataclass
class BatchGetAggregateResourceConfigResponse:
    base_configuration_items: Optional[List[baseconfigurationitem.BaseConfigurationItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaseConfigurationItems' }})
    unprocessed_resource_identifiers: Optional[List[aggregateresourceidentifier.AggregateResourceIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedResourceIdentifiers' }})
    
