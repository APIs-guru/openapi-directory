from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutPermissionResponse:
    r"""PutPermissionResponse
    The structure representing the <code>putPermissionResponse</code>.
    """
    
    policy: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    revision_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
