from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3outputformatconfig


@dataclass_json
@dataclass
class S3DestinationProperties:
    bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    bucket_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketPrefix' }})
    s3_output_format_config: Optional[s3outputformatconfig.S3OutputFormatConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3OutputFormatConfig' }})
    
