from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetContainerRecipeResponse:
    container_recipe: Optional[ContainerRecipe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerRecipe') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
