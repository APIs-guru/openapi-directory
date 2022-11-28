from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PiiOutputDataConfig:
    r"""PiiOutputDataConfig
    Provides configuration parameters for the output of PII entity detection jobs.
    """
    
    s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
