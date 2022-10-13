from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import baseconfigurationitem
from . import resourcekey


@dataclass_json
@dataclass
class BatchGetResourceConfigResponse:
    base_configuration_items: Optional[List[baseconfigurationitem.BaseConfigurationItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseConfigurationItems' }})
    unprocessed_resource_keys: Optional[List[resourcekey.ResourceKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unprocessedResourceKeys' }})
    
