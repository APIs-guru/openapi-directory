from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartMlLabelingSetGenerationTaskRunRequest:
    output_s3_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3Path' }})
    transform_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformId' }})
    
