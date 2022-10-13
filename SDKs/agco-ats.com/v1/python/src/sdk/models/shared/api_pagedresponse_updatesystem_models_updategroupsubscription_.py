from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import updatesystem_models_updategroupsubscription
from . import api_pagedresponsemetadata


@dataclass_json
@dataclass
class APIPagedResponseUpdateSystemModelsUpdateGroupSubscription:
    entities: List[updatesystem_models_updategroupsubscription.UpdateSystemModelsUpdateGroupSubscription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    metadata: api_pagedresponsemetadata.APIPagedResponseMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    
