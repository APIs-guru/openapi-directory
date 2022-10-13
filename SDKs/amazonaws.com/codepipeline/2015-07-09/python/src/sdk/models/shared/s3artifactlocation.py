from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3ArtifactLocation:
    bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    object_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectKey' }})
    
