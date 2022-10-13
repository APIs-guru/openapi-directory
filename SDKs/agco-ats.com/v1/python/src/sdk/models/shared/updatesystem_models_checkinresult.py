from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import updatesystem_models_package


@dataclass_json
@dataclass
class UpdateSystemModelsCheckinResult:
    packages: Optional[List[updatesystem_models_package.UpdateSystemModelsPackage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Packages' }})
    remove_packages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemovePackages' }})
    
