from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configurationitem


@dataclass_json
@dataclass
class GetAggregateResourceConfigResponse:
    configuration_item: Optional[configurationitem.ConfigurationItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationItem' }})
    
