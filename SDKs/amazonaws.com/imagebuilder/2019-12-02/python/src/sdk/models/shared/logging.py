from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3logs


@dataclass_json
@dataclass
class Logging:
    s3_logs: Optional[s3logs.S3Logs] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Logs' }})
    
