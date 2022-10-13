from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StreamSummary:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamArn' }})
    stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamId' }})
    stream_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamVersion' }})
    
