from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3SourceProperties:
    r"""S3SourceProperties
    The properties that are applied when Amazon S3 is being used as the flow source.
    """
    
    bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketName') }})
    bucket_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketPrefix') }})
    
