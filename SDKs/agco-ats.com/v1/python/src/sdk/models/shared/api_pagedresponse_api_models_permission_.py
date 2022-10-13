from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import api_models_permission
from . import api_pagedresponsemetadata


@dataclass_json
@dataclass
class APIPagedResponseAPIModelsPermission:
    entities: List[api_models_permission.APIModelsPermission] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    metadata: api_pagedresponsemetadata.APIPagedResponseMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    
