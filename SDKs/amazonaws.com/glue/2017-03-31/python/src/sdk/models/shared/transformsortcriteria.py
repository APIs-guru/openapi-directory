from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransformSortCriteria:
    r"""TransformSortCriteria
    The sorting criteria that are associated with the machine learning transform.
    """
    
    column: TransformSortColumnTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Column') }})
    sort_direction: SortDirectionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortDirection') }})
    
