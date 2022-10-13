from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import kinesisstreamsourcedescription


@dataclass_json
@dataclass
class SourceDescription:
    kinesis_stream_source_description: Optional[kinesisstreamsourcedescription.KinesisStreamSourceDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisStreamSourceDescription' }})
    
