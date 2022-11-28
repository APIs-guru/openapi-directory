from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InputDataConfig:
    r"""InputDataConfig
    The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. 
    """
    
    s3_bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Bucket') }})
    s3_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Key') }})
    
