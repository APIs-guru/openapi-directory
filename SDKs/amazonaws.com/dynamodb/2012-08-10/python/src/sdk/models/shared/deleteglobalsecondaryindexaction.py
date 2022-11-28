from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteGlobalSecondaryIndexAction:
    r"""DeleteGlobalSecondaryIndexAction
    Represents a global secondary index to be deleted from an existing table.
    """
    
    index_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    
