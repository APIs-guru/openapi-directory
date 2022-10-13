from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import streamingstatus_enum


@dataclass_json
@dataclass
class CognitoStreams:
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    streaming_status: Optional[streamingstatus_enum.StreamingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamingStatus' }})
    
