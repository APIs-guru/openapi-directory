from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FailedBatchItem:
    r"""FailedBatchItem
     A single item in a batch that failed to perform the intended action because of an error preventing it from succeeding. 
    """
    
    error_message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
