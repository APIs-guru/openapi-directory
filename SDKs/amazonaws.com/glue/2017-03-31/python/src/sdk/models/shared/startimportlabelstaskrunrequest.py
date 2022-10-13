from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartImportLabelsTaskRunRequest:
    input_s3_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputS3Path' }})
    replace_all_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplaceAllLabels' }})
    transform_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformId' }})
    
