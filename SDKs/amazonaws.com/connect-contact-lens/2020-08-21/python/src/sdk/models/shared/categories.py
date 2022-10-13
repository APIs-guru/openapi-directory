from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import categorydetails


@dataclass_json
@dataclass
class Categories:
    matched_categories: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchedCategories' }})
    matched_details: dict[str, categorydetails.CategoryDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchedDetails' }})
    
