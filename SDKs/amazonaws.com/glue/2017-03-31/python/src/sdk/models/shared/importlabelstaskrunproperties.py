from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImportLabelsTaskRunProperties:
    input_s3_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputS3Path' }})
    replace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Replace' }})
    
