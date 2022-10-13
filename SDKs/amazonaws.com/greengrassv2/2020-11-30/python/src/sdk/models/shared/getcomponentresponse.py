from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import recipeoutputformat_enum


@dataclass_json
@dataclass
class GetComponentResponse:
    recipe: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipe' }})
    recipe_output_format: recipeoutputformat_enum.RecipeOutputFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipeOutputFormat' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
