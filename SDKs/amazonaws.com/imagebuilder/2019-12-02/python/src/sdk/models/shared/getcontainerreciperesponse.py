from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import containerrecipe


@dataclass_json
@dataclass
class GetContainerRecipeResponse:
    container_recipe: Optional[containerrecipe.ContainerRecipe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerRecipe' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
