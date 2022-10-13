from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jobinput
from . import jobinput
from . import joboutput
from . import joboutput
from . import playlist
from . import timing


@dataclass_json
@dataclass
class Job:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    input: Optional[jobinput.JobInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Input' }})
    inputs: Optional[List[jobinput.JobInput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Inputs' }})
    output: Optional[joboutput.JobOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Output' }})
    output_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputKeyPrefix' }})
    outputs: Optional[List[joboutput.JobOutput]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Outputs' }})
    pipeline_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineId' }})
    playlists: Optional[List[playlist.Playlist]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Playlists' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    timing: Optional[timing.Timing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timing' }})
    user_metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserMetadata' }})
    
