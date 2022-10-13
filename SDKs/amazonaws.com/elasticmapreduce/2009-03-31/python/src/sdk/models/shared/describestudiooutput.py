from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import studio


@dataclass_json
@dataclass
class DescribeStudioOutput:
    studio: Optional[studio.Studio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Studio' }})
    
