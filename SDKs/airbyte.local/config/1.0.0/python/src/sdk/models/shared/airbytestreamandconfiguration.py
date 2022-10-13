from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import airbytestreamconfiguration
from . import airbytestream


@dataclass_json
@dataclass
class AirbyteStreamAndConfiguration:
    config: Optional[airbytestreamconfiguration.AirbyteStreamConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    stream: Optional[airbytestream.AirbyteStream] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stream' }})
    
