from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Column:
    r"""Column
    Contains information about a column that stores your data.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
