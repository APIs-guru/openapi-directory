from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GeneratorRecipeCharacterSetsEnum(str, Enum):
    LETTERS = "LETTERS"
    DIGITS = "DIGITS"
    SYMBOLS = "SYMBOLS"


@dataclass_json
@dataclass
class GeneratorRecipe:
    r"""GeneratorRecipe
    The recipe is used in conjunction with the \"generate\" property to set the character set used to generate a new secure value
    """
    
    character_sets: Optional[List[GeneratorRecipeCharacterSetsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('characterSets') }})
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    
