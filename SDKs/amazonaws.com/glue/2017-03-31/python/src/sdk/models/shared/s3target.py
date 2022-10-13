from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3Target:
    connection_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionName' }})
    exclusions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Exclusions' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    sample_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SampleSize' }})
    
