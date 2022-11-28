from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartImportLabelsTaskRunRequest:
    input_s3_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputS3Path') }})
    transform_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformId') }})
    replace_all_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplaceAllLabels') }})
    
