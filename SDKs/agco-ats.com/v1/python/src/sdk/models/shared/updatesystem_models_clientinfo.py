from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import updatesystem_models_packagereport


@dataclass_json
@dataclass
class UpdateSystemModelsClientInfo:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientID' }})
    package: Optional[List[updatesystem_models_packagereport.UpdateSystemModelsPackageReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Package' }})
    
