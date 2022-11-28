from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OutputDataConfig:
    r"""OutputDataConfig
    The output properties for a detection job.
    """
    
    s3_bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Bucket') }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Key') }})
    
