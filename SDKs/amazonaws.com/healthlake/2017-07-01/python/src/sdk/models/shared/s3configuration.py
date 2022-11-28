from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3Configuration:
    r"""S3Configuration
     The configuration of the S3 bucket for either an import or export job. This includes assigning permissions for access. 
    """
    
    kms_key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Uri') }})
    
