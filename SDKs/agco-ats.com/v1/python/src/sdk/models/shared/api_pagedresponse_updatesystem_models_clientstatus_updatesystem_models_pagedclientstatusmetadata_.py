from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import updatesystem_models_clientstatus
from . import updatesystem_models_pagedclientstatusmetadata


@dataclass_json
@dataclass
class APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata:
    entities: List[updatesystem_models_clientstatus.UpdateSystemModelsClientStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entities' }})
    metadata: updatesystem_models_pagedclientstatusmetadata.UpdateSystemModelsPagedClientStatusMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    
