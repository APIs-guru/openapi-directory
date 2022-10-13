from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3destination


@dataclass_json
@dataclass
class ExportDestination:
    s3: Optional[s3destination.S3Destination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3' }})
    
