from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StreamSpecification:
    r"""StreamSpecification
    Represents the DynamoDB Streams configuration for a table in DynamoDB.
    """
    
    stream_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamEnabled') }})
    stream_view_type: Optional[StreamViewTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamViewType') }})
    
