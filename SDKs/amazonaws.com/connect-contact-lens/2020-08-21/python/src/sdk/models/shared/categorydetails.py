from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CategoryDetails:
    r"""CategoryDetails
    Provides information about the category rule that was matched.
    """
    
    points_of_interest: List[PointOfInterest] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PointsOfInterest') }})
    
