from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aggregateresourceidentifier


@dataclass_json
@dataclass
class ListAggregateDiscoveredResourcesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_identifiers: Optional[List[aggregateresourceidentifier.AggregateResourceIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceIdentifiers' }})
    
