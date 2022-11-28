from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpsolverDestinationProperties:
    r"""UpsolverDestinationProperties
     The properties that are applied when Upsolver is used as a destination. 
    """
    
    bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    s3_output_format_config: UpsolverS3OutputFormatConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3OutputFormatConfig') }})
    bucket_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPrefix') }})
    
