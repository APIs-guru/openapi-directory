from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GeneratorRecipeCharacterSetsEnum(str, Enum):
    LETTERS = "LETTERS"
    DIGITS = "DIGITS"
    SYMBOLS = "SYMBOLS"


@dataclass_json
@dataclass
class GeneratorRecipe:
    character_sets: Optional[List[GeneratorRecipeCharacterSetsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'characterSets' }})
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    
