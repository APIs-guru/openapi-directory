from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import destinationstatus_enum


@dataclass_json
@dataclass
class KinesisDataStreamDestination:
    destination_status: Optional[destinationstatus_enum.DestinationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationStatus' }})
    destination_status_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationStatusDescription' }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamArn' }})
    
