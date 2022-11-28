from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Categories:
    r"""Categories
    Provides the category rules that are used to automatically categorize contacts based on uttered keywords and phrases.
    """
    
    matched_categories: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchedCategories') }})
    matched_details: dict[str, CategoryDetails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchedDetails') }})
    
