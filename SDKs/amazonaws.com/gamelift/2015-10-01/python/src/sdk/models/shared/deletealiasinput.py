from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteAliasInput:
    r"""DeleteAliasInput
    Represents the input for a request operation.
    """
    
    alias_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AliasId') }})
    
