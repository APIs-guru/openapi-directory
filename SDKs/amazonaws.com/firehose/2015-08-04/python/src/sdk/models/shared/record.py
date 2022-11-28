from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Record:
    r"""Record
    The unit of data in a delivery stream.
    """
    
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    
