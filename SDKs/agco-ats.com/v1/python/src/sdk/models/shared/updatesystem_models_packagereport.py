from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import updatesystem_models_category


@dataclass_json
@dataclass
class UpdateSystemModelsPackageReport:
    categories: Optional[List[updatesystem_models_category.UpdateSystemModelsCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Categories' }})
    package_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PackageDescription' }})
    package_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PackageID' }})
    
