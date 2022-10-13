from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetWorkingLocationResponse:
    s3_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Bucket' }})
    s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Path' }})
    s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Uri' }})
    
