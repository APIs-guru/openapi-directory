from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import pointofinterest


@dataclass_json
@dataclass
class CategoryDetails:
    points_of_interest: List[pointofinterest.PointOfInterest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PointsOfInterest' }})
    
