from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imagerecipe


@dataclass_json
@dataclass
class GetImageRecipeResponse:
    image_recipe: Optional[imagerecipe.ImageRecipe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageRecipe' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
