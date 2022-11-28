from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Order:
    r"""Order
    Specifies the sort order of a sorted column.
    """
    
    column: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Column') }})
    sort_order: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortOrder') }})
    
