from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3Configuration:
    kms_key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Uri' }})
    
