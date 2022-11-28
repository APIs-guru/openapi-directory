from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RxNormTrait:
    r"""RxNormTrait
    The contextual information for the entity. InferRxNorm recognizes the trait <code>NEGATION</code>, which is any indication that the patient is not taking a medication. 
    """
    
    name: Optional[RxNormTraitNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Score') }})
    
