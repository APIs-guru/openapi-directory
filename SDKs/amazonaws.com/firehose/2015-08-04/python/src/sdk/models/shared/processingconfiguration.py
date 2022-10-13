from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import processor


@dataclass_json
@dataclass
class ProcessingConfiguration:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    processors: Optional[List[processor.Processor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Processors' }})
    
