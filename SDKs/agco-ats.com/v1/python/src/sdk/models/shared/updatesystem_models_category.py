from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import updatesystem_models_attributevalue


@dataclass_json
@dataclass
class UpdateSystemModelsCategory:
    values: Optional[List[updatesystem_models_attributevalue.UpdateSystemModelsAttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    category: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    
