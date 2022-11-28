from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DataRetrievalRule:
    r"""DataRetrievalRule
    Data retrieval policy rule.
    """
    
    bytes_per_hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BytesPerHour') }})
    strategy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Strategy') }})
    
