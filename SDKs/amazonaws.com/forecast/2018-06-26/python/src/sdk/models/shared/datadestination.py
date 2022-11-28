from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataDestination:
    r"""DataDestination
    The destination for an export job. Provide an S3 path, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an AWS Key Management Service (KMS) key (optional). 
    """
    
    s3_config: S3Config = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Config') }})
    
