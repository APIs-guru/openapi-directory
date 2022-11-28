from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateAliasRequest:
    r"""CreateAliasRequest
    Contains the inputs for the <a>CreateAlias</a> operation.
    """
    
    alias: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alias') }})
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    
