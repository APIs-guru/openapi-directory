from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3Config:
    r"""S3Config
    The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an AWS Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.
    """
    
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSKeyArn') }})
    
