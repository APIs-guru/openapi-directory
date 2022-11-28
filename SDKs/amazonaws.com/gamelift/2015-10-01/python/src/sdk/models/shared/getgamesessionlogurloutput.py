from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetGameSessionLogURLOutput:
    r"""GetGameSessionLogURLOutput
    Represents the returned data in response to a request operation.
    """
    
    pre_signed_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreSignedUrl') }})
    
