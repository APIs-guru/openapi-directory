from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import airbytestreamandconfiguration


@dataclass_json
@dataclass
class AirbyteCatalog:
    streams: List[airbytestreamandconfiguration.AirbyteStreamAndConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streams' }})
    
