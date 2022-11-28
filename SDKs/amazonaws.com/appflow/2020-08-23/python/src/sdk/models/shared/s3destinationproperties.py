from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3DestinationProperties:
    r"""S3DestinationProperties
     The properties that are applied when Amazon S3 is used as a destination. 
    """
    
    bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    bucket_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPrefix') }})
    s3_output_format_config: Optional[S3OutputFormatConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3OutputFormatConfig') }})
    
