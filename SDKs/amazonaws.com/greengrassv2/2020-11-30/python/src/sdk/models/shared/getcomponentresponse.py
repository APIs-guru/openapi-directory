from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetComponentResponse:
    recipe: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipe') }})
    recipe_output_format: RecipeOutputFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipeOutputFormat') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
