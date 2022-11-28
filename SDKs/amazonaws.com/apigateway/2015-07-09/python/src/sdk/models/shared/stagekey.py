from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StageKey:
    r"""StageKey
    A reference to a unique stage identified in the format <code>{restApiId}/{stage}</code>.
    """
    
    rest_api_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restApiId') }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    
