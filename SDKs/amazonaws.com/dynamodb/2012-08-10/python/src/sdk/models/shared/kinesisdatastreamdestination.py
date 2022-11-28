from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KinesisDataStreamDestination:
    r"""KinesisDataStreamDestination
    Describes a Kinesis data stream destination.
    """
    
    destination_status: Optional[DestinationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationStatus') }})
    destination_status_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationStatusDescription') }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamArn') }})
    
