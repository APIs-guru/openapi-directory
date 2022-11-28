from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AirbyteStreamAndConfiguration:
    r"""AirbyteStreamAndConfiguration
    each stream is split in two parts; the immutable schema from source and mutable configuration for destination
    """
    
    config: Optional[AirbyteStreamConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    stream: Optional[AirbyteStream] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream') }})
    
