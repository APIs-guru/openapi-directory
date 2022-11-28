from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Job:
    r"""Job
    A section of the response body that provides information about the job that is created.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    input: Optional[JobInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Input') }})
    inputs: Optional[List[JobInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Inputs') }})
    output: Optional[JobOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Output') }})
    output_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputKeyPrefix') }})
    outputs: Optional[List[JobOutput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outputs') }})
    pipeline_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PipelineId') }})
    playlists: Optional[List[Playlist]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Playlists') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    timing: Optional[Timing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timing') }})
    user_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserMetadata') }})
    
