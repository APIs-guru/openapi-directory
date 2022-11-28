from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DocumentClassifierOutputDataConfig:
    r"""DocumentClassifierOutputDataConfig
    Provides output results configuration parameters for custom classifier jobs. 
    """
    
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    s3_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    
